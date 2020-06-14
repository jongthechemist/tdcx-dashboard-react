import React from 'react'
import styled from 'styled-components'
import { Card } from '../../components/Card'
import { Pie } from '../../components/Pie'
import { Skeleton } from '../../components/Skeleton'
import { Heading } from '../../components/Heading'
import { Counter } from '../../components/Counter'
import { useStatePath } from '../../helpers/hooks'
import { List, ListItem } from '../../components/List'

const DashboardSummaryViewContainer = styled.div`
  margin-bottom: 30px;
  > * {
    height: 158px;
    min-height: 158px;
    max-height: 158px;
    margin-bottom: 20px;
  }
`
export const DashboardSummaryView = () => {
  const tasksCompleted = useStatePath('dashboard.tasksCompleted', 0)
  const totalTasks = useStatePath('dashboard.totalTasks', 0)
  const latestTasks = useStatePath('dashboard.latestTasks', [])
  const status = useStatePath('dashboard.status', 'pending')
  const loading = status === 'pending' && !totalTasks

  return (
    <DashboardSummaryViewContainer className={'row'}>
      <div className={'col-md-4'}>
        <Card className={'h-100'}>
          <Skeleton count={5} loading={loading}>
            {() => (
              <>
                <Heading>Tasks Completed</Heading>
                <Counter count={tasksCompleted} total={totalTasks} />
              </>
            )}
          </Skeleton>
        </Card>
      </div>
      <div className={'col-md-4'}>
        <Card className={'h-100'}>
          <Skeleton count={5} loading={loading}>
            {() => (
              <>
                <Heading>Latest Created Task</Heading>
                <List>
                  {latestTasks.map((item, index) => (
                    <ListItem key={index} completed={item.completed}>
                      {item.name}
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Skeleton>
        </Card>
      </div>
      <div className={'col-md-4'}>
        <Card className={'h-100'}>
          <Skeleton count={5} loading={loading}>
            {() => <Pie count={tasksCompleted} total={totalTasks} />}
          </Skeleton>
        </Card>
      </div>
    </DashboardSummaryViewContainer>
  )
}
