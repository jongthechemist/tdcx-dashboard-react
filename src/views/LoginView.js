import React from 'react'
import { Redirect } from 'react-router'
import { Card } from '../components/Card'
import { Heading } from '../components/Heading'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import styled from 'styled-components'
import { useDispatchAction, useStatePath } from '../helpers/hooks'
import { setId, setName, loginUser } from '../redux/session.redux'

const LoginViewContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Card} {
    min-width: 296px;
    ${Heading} {
      margin-bottom: 24px;
    }
    ${Input} {
      margin-bottom: 12px;
    }
  }
`
export const LoginView = () => {

  const id = useStatePath('session.id', '')
  const name = useStatePath('session.name', '')
  const status = useStatePath('session.status', '')

  const dispatchSetId = useDispatchAction(setId)
  const dispatchSetName = useDispatchAction(setName)
  const dispatchLoginUser = useDispatchAction(loginUser)

  const loggingIn = status === 'pending'
  const loggedIn = status === 'fulfilled'
  
  if (loggedIn) {
    return <Redirect push to='/dashboard' />
  }

  return (
    <LoginViewContainer>
      <Card className={'d-flex flex-column'}>
        <Heading>Login</Heading>
        <Input placeholder='Id' value={id} onChange={(e) => dispatchSetId(e.target.value)}></Input>
        <Input
          placeholder='Name'
          value={name}
          onChange={(e) => dispatchSetName(e.target.value)}
        ></Input>
        <Button primary onClick={() => dispatchLoginUser()} disabled={loggingIn}>
          Login
        </Button>
      </Card>
    </LoginViewContainer>
  )
}
