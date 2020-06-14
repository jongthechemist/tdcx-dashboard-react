import React from 'react'
import { EditItemModal } from './EditItemModal'
import { TaskItem } from '../../components/TaskItem'

import { useDispatchAction } from '../../helpers/hooks'

import { editTask, removeTask } from '../../redux/task.redux'

export const TaskItemContainer = ({ id, name, completed }) => {
  
  const [showModal, setShowModal] = React.useState(false)

  const dispatchEditTask = useDispatchAction(editTask)
  const dispatchDeleteTask = useDispatchAction(removeTask)

  const onCheck = (e) => {
    dispatchEditTask({ id, name, completed: e.target.checked })
  }
  const onDelete = () => {
    dispatchDeleteTask({ id })
  }
  const toggleEdit = () => {
    setShowModal((show) => !show)
  }

  return (
    <>
      <TaskItem
        name={name}
        completed={completed}
        onCheck={onCheck}
        onClickDelete={onDelete}
        onClickEdit={toggleEdit}
      />
      <EditItemModal id={id} name={name} isOpen={showModal} toggle={toggleEdit} />
    </>
  )
}
