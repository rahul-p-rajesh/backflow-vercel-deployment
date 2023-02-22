// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import invoice from 'src/store/apps/invoice'
import calendar from 'src/store/apps/calendar'
import permissions from 'src/store/apps/permissions'
import customers from './apps/customers'
import user from './apps/user'

export const store = configureStore({
  reducer: {
    user,
    invoice,
    calendar,
    customers,
    permissions
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
