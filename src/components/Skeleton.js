import React from 'react'
import BaseSkeleton from 'react-loading-skeleton'

export const Skeleton = ({ loading, children, ...rest }) => {
  return loading ? <BaseSkeleton {...rest}/> : children()
}