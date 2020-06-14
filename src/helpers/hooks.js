import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isFunction, get } from 'lodash'
import { ThemeContext } from 'styled-components'

/**
 * Wrap actions with dispatch
 * @param {Action} action Action or action creator to dispatch
 */
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

/**
 * Get Redux state at given path
 * @param {string} path Path to state in Redux using dot notation
 * @param {any} defaultValue Default value if state is not defined in Redux
 * @param {function} equalityFn Equality function to compare changes to state
 */
export const useStatePath = (path, defaultValue, equalityFn = undefined) => {
  const selector = useSelector((state) => get(state, path, defaultValue), equalityFn)
  return selector
}

/**
 * Get accent color
 */
export const useAccent = () => {
  const {accent} = React.useContext(ThemeContext)
  return accent
}