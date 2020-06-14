import React from 'react'
import { Counter } from './Counter'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

test('[Counter] renders', () => {
  const result = render(<Counter count={12} total={24} />)
  const countElement = result.getByText('12')
  const totalElement = result.getByText(/24/)
  expect(countElement).toBeInTheDocument()
  expect(totalElement).toBeInTheDocument()
})

test('[Counter] renders with theme', () => {
  const result = render(
    <ThemeProvider theme={{ accent: 'blue' }}>
      <Counter count={12} total={24} />
    </ThemeProvider>
  )
  const countElement = result.getByText('12')
  const totalElement = result.getByText(/24/)
  expect(countElement).toBeInTheDocument()
  expect(totalElement).toBeInTheDocument()
})
