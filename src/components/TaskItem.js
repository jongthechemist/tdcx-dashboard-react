import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

const TaskItemContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  &:not(:first-child) {
    padding-top: 24px;
  }
  &:not(:last-child) {
    padding-bottom: 24px;
    border-bottom: 2px solid #E8E8E8;
  }
  input[type=checkbox] {
    width: 16px;
    height: 22px;
    margin-right: 16px;
  }
  label {
    display: flex;
    flex-grow: 1;
    color: ${props => props.completed ? '#537178' : '#5285EC'};
    margin-bottom: 0;
    text-decoration-line: ${props => props.completed ? 'line-through' : 'none'};
    font-size: 20px;
    line-height: 24px;
  }
  ${Button} {
    padding: 4px 8px;
  }
`

export const TaskItem = ({ name, completed, onCheck, onClickEdit, onClickDelete }) => {
  return (
    <TaskItemContainer completed={completed}>
      <label>
        <input type={'checkbox'} checked={completed} onChange={onCheck} />
        <div className={'task-name'}>{name}</div>
      </label>
      <Button onClick={onClickEdit}>
        <span className='fas fa-pencil-alt'></span>
      </Button>
      <Button onClick={onClickDelete}>
        <span className='fas fa-trash'></span>
      </Button>
    </TaskItemContainer>
  )
}
