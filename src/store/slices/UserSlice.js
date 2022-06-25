import { createSlice } from '@reduxjs/toolkit'
import Api from '../../lib/Api'

const userSlice = createSlice({
  name: 'userState',
  initialState: {
    users: [],
    userSelected: {}
  },
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload
    },
    setSelectedUser: (state, action) => {
      state.userSelected = action.payload
    }
  }
})

export const { setSelectedUser, setUserList } = userSlice.actions
export default userSlice.reducer

export const getAllUsers = () => async dispatch => {
  const response = await Api.get('users')
  dispatch(setUserList(response))
}
export const getUserById = id => async dispatch => {
  const response = await Api.get(`users/${id}`)
  dispatch(setSelectedUser(response))
}
