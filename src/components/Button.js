import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#5285ec' : 'transparent')};
  border: none;
  border-radius: 8px;
  color: ${(props) => (props.primary ? 'white' : '#647278')};
  font-size: 14px;
  line-height: 18px;
  padding: 11px 22px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.primary ? darken(0.2, '#5285ec') : lighten(0.5, '#647278')
    };
  }
  &[disabled] {
    background-color: lightgray;
  }
`
