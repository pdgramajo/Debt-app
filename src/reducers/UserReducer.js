import {
  GET_USER,
  GET_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from '../constants/User'

const UserReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload
      }
    case GET_USER:
      return {
        ...state,
        selectedUser: payload
      }
    case ADD_USER:
      return state
    //   return {
    //     ...state,
    //     selectedUser: payload,
    //   };
    case EDIT_USER:
      return state
    //   return {
    //     ...state,
    //     selectedUser: payload,
    //   };
    case DELETE_USER:
      return state
    //   return {
    //     ...state,
    //     selectedUser: payload,
    //   };

    default:
      return state
  }
}

export default UserReducer
