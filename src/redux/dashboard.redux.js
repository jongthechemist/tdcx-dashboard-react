import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDashboard } from '../services/dashboard.service'

export const fetchDashboard = createAsyncThunk('dashboard/fetchDashboard', async () => {
  return getDashboard()
})

const initialState = {
  tasksCompleted: 0,
  totalTasks: 0,
  latestTasks: [],
  status: ''
}
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  extraReducers: {
    [fetchDashboard.pending]: (state) => {
      state.status = 'pending'
    },
    [fetchDashboard.fulfilled]: (state, action) => {
      state.tasksCompleted = action.payload.tasksCompleted
      state.totalTasks = action.payload.totalTasks
      state.latestTasks = action.payload.latestTasks
      state.status = 'fulfilled'
    },
    [fetchDashboard.rejected]: (state) => {
      state.status = 'rejected'
    }
  }
})

export default dashboardSlice.reducer
