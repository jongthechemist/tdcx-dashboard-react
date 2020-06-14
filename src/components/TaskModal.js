import React, { useEffect } from 'react'
import { Modal } from './Modal'
import { Input } from './Input'
import { Button } from './Button'

export const TaskModal = ({
  isOpen,
  header,
  defaultValue,
  submitText,
  disabled,
  onSubmit,
  toggle
}) => {
  const [value, setValue] = React.useState(defaultValue)

  useEffect(() => {
    if (isOpen) {
      setValue(defaultValue)
    }
  }, [defaultValue, isOpen])

  return (
    <Modal header={header} isOpen={isOpen} toggle={toggle}>
      <div className={'d-flex flex-column'}>
        <Input
          placeholder={'Task Name'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={'mb-2'}
        ></Input>
        <Button primary onClick={() => onSubmit(value)} disabled={disabled || !value}>
          {submitText}
        </Button>
      </div>
    </Modal>
  )
}
