import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './dashboard.redux'
import sessionReducer from './session.redux'
import taskReducer from './task.redux'

const reducer = {
  dashboard: dashboardReducer,
  session: sessionReducer,
  task: taskReducer
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const ReduxProvider = ({
  children
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}