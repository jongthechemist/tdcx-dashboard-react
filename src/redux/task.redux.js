import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postTask, getTasks, putTask, deleteTask } from '../services/task.service'
import { fetchDashboard } from './dashboard.redux'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_payload, { dispatch }) => {
  const result = await getTasks()
  dispatch(tasksSlice.actions.setFilter(''))
  dispatch(fetchDashboard())
  return result.tasks
})

export const addTask = createAsyncThunk('tasks/addTask', async ({ name }, { dispatch }) => {
  const result = await postTask({ name })
  dispatch(fetchTasks())
  return result
})

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ id, name, completed }, { dispatch }) => {
    const result = await putTask({ id, name, completed })
    dispatch(fetchTasks())
    return result
  }
)

export const removeTask = createAsyncThunk('tasks/removeTask', async ({ id }, { dispatch }) => {
  const result = await deleteTask({ id })
  dispatch(fetchTasks())
  return result
})

const initialState = {
  tasks: [],
  filter: '',
  listStatus: '',
  addStatus: '',
  editStatus: '',
  removeStatus: ''
}
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.listStatus = 'pending'
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.listStatus = 'fulfilled'
      state.tasks = action.payload
    },
    [fetchTasks.rejected]: (state) => {
      state.listStatus = 'rejected'
    },
    [addTask.pending]: (state) => {
      state.addStatus = 'pending'
    },
    [addTask.fulfilled]: (state) => {
      state.addStatus = 'fulfilled'
    },
    [addTask.rejected]: (state) => {
      state.addStatus = 'rejected'
    },
    [editTask.pending]: (state) => {
      state.editStatus = 'pending'
    },
    [editTask.fulfilled]: (state) => {
      state.editStatus = 'fulfilled'
    },
    [editTask.rejected]: (state) => {
      state.editStatus = 'rejected'
    },
    [removeTask.pending]: (state) => {
      state.removeStatus = 'pending'
    },
    [removeTask.fulfilled]: (state) => {
      state.removeStatus = 'fulfilled'
    },
    [removeTask.rejected]: (state) => {
      state.removeStatus = 'rejected'
    }
  }
})

export const { setFilter } = tasksSlice.actions

export default tasksSlice.reducer
