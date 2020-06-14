import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postLogin } from '../services/session.service'
import { setToken } from '../services/_index'
import { getStorage, setStorage, removeStorage, clearStorage } from '../helpers/storage'

export const loginUser = createAsyncThunk('session/login', async (_payload, { getState }) => {
  const {
    session: { name, id }
  } = getState()
  return postLogin({ name, apiKey: id })
})

export const startSession = createAsyncThunk('session/start', async (_payload, { dispatch }) => {
  const name = getStorage('name')
  const id = getStorage('id')
  if (name && id) {
    dispatch(sessionSlice.actions.setId(id))
    dispatch(sessionSlice.actions.setName(name))
    dispatch(loginUser())
  }
})

const initialState = {
  name: '',
  id: '0899418973a22148',
  status: '',
  token: ''
}
const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    logoutUser: (state) => {
      state.name = ''
      state.token = ''
      state.id = ''
      state.status = ''
      clearStorage()
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = 'pending'
    },
    [loginUser.fulfilled]: (state, action) => {
      state.name = action.payload.token.name
      state.token = action.payload.token.token
      state.status = 'fulfilled'
      setToken(action.payload.token.token)
      setStorage('name', state.name)
      setStorage('id', state.id)
    },
    [loginUser.rejected]: (state) => {
      state.status = 'rejected'
      removeStorage('name')
      removeStorage('id')
    }
  }
})

export const { setName, setId, logoutUser } = sessionSlice.actions

export default sessionSlice.reducer
