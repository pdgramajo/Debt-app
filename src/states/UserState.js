import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
// import Api from "../lib/Api";
import UserReducer from '../reducers/UserReducer'
import UserContext from '../contexts/UserContext'
import { GET_USERS, GET_USER } from '../constants/User'
import Users from '../mocks/Users.mock'
// import axios from "axios";

export const UserState = ({ children }) => {
  const initialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    // const res = await axios.get("https://reqres.in/api/users");
    dispatch({
      type: GET_USERS,
      payload: Users
      // payload: res.data.data,
    })
  }

  const getUserById = async id => {
    // const res = await axios.get("https://reqres.in/api/users/" + id);
    dispatch({
      type: GET_USER,
      payload: Users.find(user => user.id === id)
      // payload: res.data.data,
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getUserById
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState

UserState.propTypes = {
  children: PropTypes.node
}
