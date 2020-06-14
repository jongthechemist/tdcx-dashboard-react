import React from 'react'
import { useDispatchAction } from '../../helpers/hooks'
import { editTask } from '../../redux/task.redux'
import { useStatePath } from '../../helpers/hooks'
import { TaskModal } from '../../components/TaskModal'

export const EditItemModal = ({ id, name, isOpen, toggle }) => {
  const dispatchEditTask = useDispatchAction(editTask)
  const status = useStatePath('task.editStatus', [])
  const submitting = status === 'pending'

  const onSubmit = (newName) => {
    dispatchEditTask({ id, name: newName })
    .then(() => toggle())
  }

  return (
    <TaskModal
      header={'Edit Task'}
      isOpen={isOpen}
      defaultValue={name}
      onSubmit={onSubmit}
      disabled={submitting}
      submitText={'Edit Task'}
      toggle={toggle}
    />
  )
}
