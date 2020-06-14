import React from 'react'
import styled from 'styled-components'

const CountContainer = styled.span`
  font-size: 64px;
  color: #5285ec;
`
const TotalContainer = styled.span`
  font-size: 20px;
  color: #8f9ea2;
`

export const Counter = ({ count, total }) => {
  return (
    <div>
      <CountContainer>{count}</CountContainer>
      <TotalContainer>/{total}</TotalContainer>
    </div>
  )
}
