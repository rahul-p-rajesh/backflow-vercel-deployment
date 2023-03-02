// ** React Imports
import { useState, useEffect, MouseEvent, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { DataGrid, GridSortModel } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData, deleteUser } from 'src/store/apps/customers'

// ** Third Party Components

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'

// import { ThemeColor } from 'src/@core/layouts/types'
import { CustomerType } from 'src/types/apps/customerTypes'

// ** Custom Table Components Imports
import TableHeader from 'src/views/apps/customer/list/TableHeader'
import AddUserDrawer from 'src/views/apps/customer/list/AddCustomerDrawer' //TODO need to change it to modal

import { throttle } from 'lodash'

// interface UserStatusType {
//   [key: string]: ThemeColor
// }

// ** Vars
interface CellType {
  row: CustomerType
}

// const userStatusObj: UserStatusType = {
//   active: 'success',
//   pending: 'warning',
//   inactive: 'secondary'
// }

const RowOptions = ({ id }: { id: number | string }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='bx:dots-vertical-rounded' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          href='/apps/user/view/account'
          onClick={handleRowOptionsClose}
        >
          <Icon icon='bx:show' fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='bx:pencil' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='bx:trash-alt' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const columns = [
  {
    flex: 0.25,
    minWidth: 80,
    headerName: 'id',
    field: 'id',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {row.id}
        </Typography>
      )
    }
  },

  {
    flex: 0.25,
    minWidth: 180,
    headerName: 'first name',
    field: 'firstName',
    sortable: false,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {row.firstName}
        </Typography>
      )
    }
  },

  {
    flex: 0.25,
    minWidth: 180,
    headerName: 'last name',
    field: 'lastName',
    sortable: false,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {row.firstName}
        </Typography>
      )
    }
  },

  {
    flex: 0.5,
    minWidth: 300,
    headerName: 'email',
    field: 'email',
    sortable: false,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {row.email}
        </Typography>
      )
    }
  },

  {
    flex: 1,
    flexFlow: 'row wrap',
    minWidth: 500,
    headerName: 'Service Address',
    field: 'address',
    sortable: false,

    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {`${row.slApartment} ${row.slStreetNo} ${row.slStreetName}  ${row.slCity}  ${row.slState}  ${row.slPostalCode}`}
        </Typography>
      )
    }
  },

  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
  }
]

// const mockData = [
//   {
//     id: '10',
//     firstName: 'priya',
//     lastName: 'Dharshini',
//     companyName:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quibusdam animi amet expedita molestiae corrupti illum quidem? Sunt alias mollitia adipisci, temporibus itaque natus labore ullam excepturi suscipit voluptate odit beatae nobis assumenda commodi cum optio modi dolorem illum rerum!',
//     slStreetNo: '234',
//     slStreetName: 'abc street',
//     slApartment: 'Greenway Apartments',
//     slCity: 'New york',
//     slState: 'Texas',
//     slPostalCode: '625013',
//     maStreetNo: '234',
//     maStreetName: 'abc street',
//     maApartment: 'Greenway Apartments',
//     maCity: 'New york',
//     maState: 'Texas',
//     maPostalCode: '625013',
//     poBoxNo: '62512',
//     poBoxCity: 'New york',
//     poBoxState: 'Texas',
//     poBoxPostalCode: '62512',
//     phoneNo: '9988998899',
//     email: 'dharshi@gmail.com',
//     websiteUrl:
//       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
//     isActive: true,
//     createdAt: '2023-02-16T10:41:41.000Z',
//     createdBy: 'Admin',
//     updatedAt: '2023-02-16T10:41:41.000Z',
//     updatedBy: 'Admin'
//   },
//   {
//     id: '9',
//     firstName: 'priya',
//     lastName: 'Dharshi',
//     companyName: 'AB',
//     slStreetNo: '234',
//     slStreetName: 'abc street',
//     slApartment: 'Greenway Apartments',
//     slCity: 'New york',
//     slState: 'Texas',
//     slPostalCode: '625013',
//     maStreetNo: '234',
//     maStreetName: 'abc street',
//     maApartment: 'Greenway Apartments',
//     maCity: 'New york',
//     maState: 'Texas',
//     maPostalCode: '625013',
//     poBoxNo: '62512',
//     poBoxCity: 'New york',
//     poBoxState: 'Texas',
//     poBoxPostalCode: '62512',
//     phoneNo: '9988998899',
//     email: 'example@gmail.com',
//     websiteUrl:
//       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
//     isActive: true,
//     createdAt: '2023-02-16T10:32:56.000Z',
//     createdBy: 'Admin',
//     updatedAt: '2023-02-16T10:32:56.000Z',
//     updatedBy: 'Admin'
//   },
//   {
//     id: '3',
//     firstName: 'john',
//     lastName: 'Doe',
//     companyName: 'priya',
//     slStreetNo: '',
//     slStreetName: '',
//     slApartment: '',
//     slCity: '',
//     slState: '',
//     slPostalCode: '',
//     maStreetNo: '',
//     maStreetName: '',
//     maApartment: '',
//     maCity: '',
//     maState: '',
//     maPostalCode: '',
//     poBoxNo: '',
//     poBoxCity: '',
//     poBoxState: '',
//     poBoxPostalCode: '',
//     phoneNo: '9988998899',
//     email: 'example@gmail.com',
//     websiteUrl: 'string',
//     isActive: true,
//     createdAt: '2023-02-02T16:59:26.000Z',
//     createdBy: 'Admin',
//     updatedAt: '2023-02-03T16:45:38.000Z',
//     updatedBy: 'Admin'
//   },
//   {
//     id: '2',
//     firstName: 'john',
//     lastName: 'Doe',
//     companyName: 'ABC',
//     slStreetNo: '',
//     slStreetName: '',
//     slApartment: '',
//     slCity: '',
//     slState: '',
//     slPostalCode: '',
//     maStreetNo: '',
//     maStreetName: '',
//     maApartment: '',
//     maCity: '',
//     maState: '',
//     maPostalCode: '',
//     poBoxNo: '',
//     poBoxCity: '',
//     poBoxState: '',
//     poBoxPostalCode: '',
//     phoneNo: '9988998899',
//     email: 'example@gmail.com',
//     websiteUrl: 'string',
//     isActive: true,
//     createdAt: '2023-02-02T15:18:48.000Z',
//     createdBy: 'Admin',
//     updatedAt: '2023-02-02T15:18:48.000Z',
//     updatedBy: 'Admin'
//   },
//   {
//     id: '1',
//     firstName: 'BUFFET',
//     lastName: 'priya',
//     companyName: 'ABC',
//     slStreetNo: '234',
//     slStreetName: 'abc street',
//     slApartment: '',
//     slCity: 'New york',
//     slState: 'Texas',
//     slPostalCode: '625013',
//     maStreetNo:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, enim. Ullam commodi, impedit atque sapiente facilis eos. Cupiditate natus itaque maxime deleniti molestiae, et in eum animi! Corporis obcaecati modi facilis hic soluta quia perspiciatis optio, quisquam aspernatur delectus provident nihil culpa nisi illo autem, beatae laboriosam quos cumque! Itaque aliquid rem facilis quia quam non repudiandae amet totam! Nulla, quo consequuntur repellendus similique ipsam velit quis harum, ipsum fuga possimus quod? Sed rem, natus obcaecati iste dolores aperiam fugiat?',
//     maStreetName: 'abc street',
//     maApartment: 'Greenway Apartments',
//     maCity: 'New york',
//     maState: 'Texas',
//     maPostalCode: '625013',
//     poBoxNo: '62512',
//     poBoxCity: 'New york',
//     poBoxState: 'Texas',
//     poBoxPostalCode: '62512',
//     phoneNo: '9988998899',
//     email: 'example@gmail.com',
//     websiteUrl:
//       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
//     isActive: true,
//     createdAt: '2023-02-02T15:16:48.000Z',
//     createdBy: 'Admin',
//     updatedAt: '2023-02-07T12:44:13.000Z',
//     updatedBy: 'Admin'
//   }
// ]

const CustomerList = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.customers)

  // ** State
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)

  // ** grid option
  const [pageSize, setPageSize] = useState<number>(() => store.itemsPerPage)

  const [currentPage, setCurrentPage] = useState<number>(() => store.currentPage)

  const [sort, setSort] = useState<GridSortModel>(() => {
    const initialVal: GridSortModel = [
      {
        field: store.sortBy,
        sort: store.sortByDirection === 'DESC' ? 'desc' : 'asc'
      }
    ]

    return initialVal
  })
  const [search, setSearch] = useState<string>(() => store.search)

  useEffect(() => {
    let sortBy = 'id'
    let sortDirection: 'DESC' | 'ASC' = 'DESC'
    if (sort.length > 0) {
      sortBy = sort[0].field
      if (sortBy === 'address') {
        sortBy = 'slApartment'
      }
      sortDirection = sort[0].sort === 'desc' ? 'DESC' : 'ASC'
    }
    dispatch(
      fetchData({
        page: currentPage,
        limit: pageSize,
        sortBy: sortBy,
        sortByDirection: sortDirection,
        search: ''
      })
    )
  }, [dispatch, currentPage, pageSize, sort])

  const getCustomers = (searchText = '') => {
    let sortBy = 'id'
    let sortDirection: 'DESC' | 'ASC' = 'DESC'
    if (sort.length > 0) {
      sortBy = sort[0].field
      if (sortBy === 'address') {
        sortBy = 'slApartment'
      }
      sortDirection = sort[0].sort === 'desc' ? 'DESC' : 'ASC'
    }
    dispatch(
      fetchData({
        page: currentPage,
        limit: pageSize,
        sortBy: sortBy,
        sortByDirection: sortDirection,
        search: searchText
      })
    )
  }

  const debounceFn = useCallback(
    throttle(text => getCustomers(text), 1000),
    [throttle, getCustomers]
  )

  const handleSearch = useCallback((searchText: string) => {
    setSearch(searchText)
    debounceFn(searchText)
  }, [])

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Customer Management' />
          <CardContent>
            <Divider sx={{ m: '0 !important' }} />
            <TableHeader value={search} handleFilter={handleSearch} toggle={toggleAddUserDrawer} />
            {/* //store.data */}
            <DataGrid
              autoHeight
              disableSelectionOnClick
              sortingMode='server'
              paginationMode='server'
              loading={store.isLoading}
              rows={store.data}
              rowCount={store.total}
              columns={columns}
              pageSize={pageSize}
              sortModel={sort}
              rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 75, 100]}
              onSortModelChange={newSortModel => setSort(newSortModel)}
              onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
              onPageChange={newPage => {
                console.log(newPage)
                setCurrentPage(newPage)
              }}
            />
          </CardContent>
        </Card>
      </Grid>

      <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
    </Grid>
  )
}

export default CustomerList
