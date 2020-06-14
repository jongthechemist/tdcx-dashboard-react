import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Pie, getColor } from './Pie'

jest.mock('../helpers/hooks', () => {
  return {
    useAccent: jest.fn(() => 'blue')
  }
})
test('[Pie] renders', () => {
  jest.spyOn(React, 'useMemo').mockImplementation((value) => value())
  const result = render(<Pie count={12} total={24} />)
  expect(result.container).toBeDefined()
})

test('[Pie] get accent color for completed', () => {
  const color = getColor('blue')
  expect(color({data: {id: 'completed'}})).toBe('blue')
  expect(color({data: {id: 'other'}})).toBe('transparent')
  expect(color({id: 'completed'})).toBe('blue')
  expect(color({id: 'other'})).toBe('transparent')
})