import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components/Card'
import { Heading } from '../../components/Heading'
import { NewTaskButton } from './NewTaskButton'

const DashboardEmptyViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const DashboardEmptyView = () => {
  return (
    <DashboardEmptyViewContainer>
      <Card className={'d-flex flex-column align-items-center'}>
        <Heading>You have no task.</Heading>
        <NewTaskButton>+ New Task</NewTaskButton>
      </Card>
    </DashboardEmptyViewContainer>
  )
}
