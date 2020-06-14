import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CountContainer = styled.span`
  font-size: 64px;
  color: ${(props) => props.theme?.accent || 'grey'};
`
const TotalContainer = styled.span`
  font-size: 20px;
  color: #8f9ea2;
`
/**
 * Show count over total
 */
export const Counter = ({ count, total }) => {
  return (
    <div>
      <CountContainer>{count}</CountContainer>
      <TotalContainer>/{total}</TotalContainer>
    </div>
  )
}
Counter.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number
}
