import React from 'react'
import { useStatePath, useDispatchAction } from '../helpers/hooks'
import { Redirect } from 'react-router'
import { startSession } from '../redux/session.redux'

export const ProtectedView = (Component) => {
  const ProtectedComponent = () => {
    const token = useStatePath('session.token')
    return token ? <Component /> : <Redirect to={'/'} />
  }
  return ProtectedComponent
}

export const ViewBase = (Component) => {
  const ViewComponent = () => {
    const dispatchStartSession = useDispatchAction(startSession)

    React.useEffect(() => {
      dispatchStartSession()
    }, [dispatchStartSession])

    return <Component />
  }
  return ViewComponent
}
