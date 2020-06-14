import React from 'react'
import { DashboardSummaryView } from './DashboardSummaryView'
import { render } from '@testing-library/react'
import * as Hooks from '../../helpers/hooks'

beforeEach(() => {
  jest.clearAllMocks()
  jest.spyOn(Hooks, 'useAccent').mockImplementation(() => 'blue')
})

test('[DashboardSummaryView] does not render card while status pending', () => {
  jest
    .spyOn(Hooks, 'useStatePath')
    .mockImplementation((path, defaultValue) =>
      path === 'dashboard.status' ? 'pending' : defaultValue
    )
  const result = render(<DashboardSummaryView />)
  try {
    const cardHeaderElement = result.getByText('Tasks Completed')
  } catch (e) {
    expect(e.toString()).toMatch(/[Unable to find an element]/)
  }
})

test('[DashboardSummaryView] render card when status fulfilled', () => {
  jest
    .spyOn(Hooks, 'useStatePath')
    .mockImplementation((path, defaultValue) =>
      path === 'dashboard.status' ? 'fulfilled' : defaultValue
    )
  const result = render(<DashboardSummaryView />)
  const cardHeaderElement = result.getByText('Tasks Completed')
  expect(cardHeaderElement).toBeInTheDocument()
})

test('[DashboardSummaryView] render tasks', () => {
  jest.spyOn(Hooks, 'useStatePath').mockImplementation(
    (path, defaultValue) =>
      ({
        'dashboard.status': 'fulfilled',
        'dashboard.latestTasks': [
          { name: 'Hello Task', completed: false },
          { name: 'World Task', completed: true }
        ]
      }[path] || defaultValue)
  )
  const result = render(<DashboardSummaryView />)
  const taskElement1 = result.getByText('Hello Task')
  const taskElement2 = result.getByText('World Task')
  expect(taskElement1).toBeInTheDocument()
  expect(taskElement2).toBeInTheDocument()
})
