import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isFunction, get } from 'lodash'

export const useDispatchAction = (action) => {
  const dispatch = useDispatch()
  return React.useCallback(
    (...args) => {
      if (isFunction(action)) {
        return dispatch(action(...args))
      } else {
        return dispatch(action)
      }
    },
    [action, dispatch]
  )
}

export const useStatePath = (path, defaultValue, equalityFn = undefined) => {
  const selector = useSelector((state) => get(state, path, defaultValue), equalityFn)
  return selector
}

export const useInputDispatch = (path, action) => {
  const value = useSelector((state) => get(state, path, ''))
  const dispatchAction = useDispatchAction(action)
  const onChange = (event) => {
    const newValue = event.target.value
    dispatchAction(newValue)
  }
  return [value, onChange]
}
