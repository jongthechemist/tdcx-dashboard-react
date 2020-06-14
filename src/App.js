import React from 'react'
import { RouterProvider } from './router/_index'
import { ReduxProvider } from './redux/_index'
import { setBaseURL } from './services/_index'
import { env } from './helpers/env'
import { Switch, Route } from 'react-router'
import { LoginView } from './views/LoginView'
import { DashboardView } from './views/DashboardView'
import { ProtectedView, ViewBase } from './views/ViewBase'
import { ThemeProvider } from './styles/ThemeContext'

setBaseURL(env.REACT_APP_API_URL)

function App() {
  return (
    <div className={'App'}>
      <ThemeProvider>
        <ReduxProvider>
          <RouterProvider>
            <Switch>
              <Route path={'/dashboard'} component={ViewBase(ProtectedView(DashboardView))} />
              <Route path={'/'} component={ViewBase(LoginView)} />
            </Switch>
          </RouterProvider>
        </ReduxProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
