import styled from 'styled-components'

export const List = styled.ul``

export const ListItem = styled.li`
  color: '#8F9EA2';
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: ${props => props.completed ? 'line-through' : 'none' }
`