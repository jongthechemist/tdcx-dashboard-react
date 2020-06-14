import React from 'react'
import { Input } from '../../components/Input'
import { Heading } from '../../components/Heading'
import { Skeleton } from '../../components/Skeleton'
import { Card } from '../../components/Card'
import { NewTaskButton } from './NewTaskButton'

import { fetchTasks, setFilter } from '../../redux/task.redux'

import { useStatePath } from '../../helpers/hooks'
import { useDispatchAction } from '../../helpers/hooks'
import { TaskItemContainer } from './TaskItemContainer'

export const DashboardTaskView = () => {
  const tasks = useStatePath('task.tasks', [])
  const status = useStatePath('task.listStatus', '')
  const filter = useStatePath('task.filter', '')
  const filteredTasks = React.useMemo(() => {
    return tasks.filter(
      (task) => !filter || String(task.name).toLowerCase().includes(String(filter).toLowerCase())
    )
  }, [tasks, filter])
  const fetching = status === 'pending' && tasks.length === 0

  const dispatchFetchTasks = useDispatchAction(fetchTasks)
  const dispatchSetFilter = useDispatchAction(setFilter)

  React.useEffect(() => {
    dispatchFetchTasks()
  }, [dispatchFetchTasks])

  const onFilterChange = (e) => {
    dispatchSetFilter(e.target.value)
  }

  return (
    <div>
      <div
        className={'d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center pb-4'}
      >
        <Heading className={'mb-2 mb-sm-0'}>Tasks</Heading>
        <div className={'flex-grow-1'}></div>
        <Input
          placeholder={'Search by task name'}
          className={'mr-sm-2 mb-2 mb-sm-0'}
          value={filter}
          onChange={onFilterChange}
        />
        <NewTaskButton>+ New Task</NewTaskButton>
      </div>
      <Card>
        <Skeleton loading={fetching} count={5}>
          {() =>
            filteredTasks.map((task) => (
              <TaskItemContainer
                key={task._id}
                id={task._id}
                name={task.name}
                completed={task.completed}
              />
            ))
          }
        </Skeleton>
      </Card>
    </div>
  )
}
