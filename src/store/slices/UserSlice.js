import { createSlice } from '@reduxjs/toolkit'
// import Api from '../../lib/Api'
import mockUsers from '../../mocks/Users.mock'

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
  //   const response = await Api.get('users?per_page=12')
  const response = mockUsers
  dispatch(setUserList(response))
}
export const getUserById = id => dispatch => {
  //   const response = await Api.get(`users/${id}`)
  const response = mockUsers.find(u => u.id === parseInt(id))
  dispatch(setSelectedUser(response))
}
