import React from 'react'
import { useDispatchAction } from '../../helpers/hooks'
import { useStatePath } from '../../helpers/hooks'
import { addTask } from '../../redux/task.redux'
import { Button } from '../../components/Button'
import { TaskModal } from '../../components/TaskModal'

export const NewTaskButton = ({ children }) => {
  const [newTaskOpen, setNewTaskOpen] = React.useState(false)
  const [taskName, setTaskName] = React.useState('')

  const dispatchAddTask = useDispatchAction(addTask)
  const status = useStatePath('task.addStatus', [])
  const submitting = status === 'pending'
  const onSubmit = (name) => {
    dispatchAddTask({ name }).then(() => {
      setNewTaskOpen(false)
    })
  }

  React.useEffect(() => {
    if (newTaskOpen) {
      setTaskName('')
    }
  }, [newTaskOpen])
  return (
    <>
      <Button primary onClick={() => setNewTaskOpen(true)}>
        {children}
      </Button>
      <TaskModal
        header={'+ New Task'}
        isOpen={newTaskOpen}
        defaultValue={taskName}
        onSubmit={onSubmit}
        disabled={submitting}
        submitText={'+ New Task'}
        toggle={() => setNewTaskOpen(false)}
        />
    </>
  )
}