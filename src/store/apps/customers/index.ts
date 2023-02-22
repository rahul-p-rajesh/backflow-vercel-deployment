// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { PaginationParams, preparePaginationParams } from 'src/utils/utils'

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

const url = 'http://ec2-52-207-247-121.compute-1.amazonaws.com:8080'

// ** Fetch Users
export const fetchData = createAsyncThunk('appUsers/fetchData', async (params: PaginationParams) => {
  const urlParams = preparePaginationParams(params)
  const response = await axios.get(`${url}/customers`, { params: urlParams })
  if (response.status == 204) {
    return {
      response: { data: [], meta: { itemsPerPage: 0, totalItems: 0, currentPage: 0, totalPages: 0 } },
      urlParams: params
    }
  }

  return { response: response.data, urlParams: params }
})

// ** Add User
export const addUser = createAsyncThunk(
  'appUsers/addUser',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/apps/users/add-user', {
      data
    })
    dispatch(fetchData(getState().user.params))

    return response.data
  }
)

// ** Delete User
export const deleteUser = createAsyncThunk(
  'appUsers/deleteUser',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/apps/users/delete', {
      data: id
    })
    dispatch(fetchData(getState().user.params))

    return response.data
  }
)

export const appCustomersSlice = createSlice({
  name: 'customers',
  initialState: {
    data: [],
    itemsPerPage: 5,
    total: 1,
    currentPage: 0,
    sortBy: 'id',
    sortByDirection: 'ASC',
    search: '',
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        return {
          ...state,
          isLoading: true
        }
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload.response.data,
          itemsPerPage: action.payload.response.meta.itemsPerPage,
          total: action.payload.response.meta.totalItems,
          currentPage: action.payload.response.meta.currentPage,
          sortBy: action.payload.urlParams.sortBy,
          sortByDirection: action.payload.urlParams.sortByDirection,
          search: action.payload.urlParams.search,
          isLoading: false
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.log(action)
      })
  }
})

export default appCustomersSlice.reducer
