import React from 'react'
import { RouterProvider } from './router/_index'
import { ReduxProvider } from './redux/_index'
import { setBaseURL } from './services/_index'
import { env } from './helpers/env'
import { Switch, Route } from 'react-router'
import { LoginView } from './views/LoginView'
import { DashboardView } from './views/DashboardView'
import { ProtectedView, ViewBase } from './views/ViewBase'

setBaseURL(env.REACT_APP_API_URL)

function App() {
  return (
    <ReduxProvider>
      <RouterProvider>
        <Switch>
          <Route path={'/dashboard'} component={ViewBase(ProtectedView(DashboardView))} />
          <Route path={'/'} component={ViewBase(LoginView)} />
        </Switch>
      </RouterProvider>
    </ReduxProvider>
  )
}

export default App
