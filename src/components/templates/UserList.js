import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUsers } from '../../store/slices/UserSlice'

import AutoComplete from '../molecules/AutoComplete'

const UserList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.userState)

  useEffect(() => {
    dispatch(getAllUsers())
    // setFilteredUsers(users);
  }, [])

  const handleClick = id => {
    // getUserById(id)
    navigate(`/users/${id}`)
  }

  return (
    <section className="flex flex-col justify-center gap-3 items-center mt-5">
      <AutoComplete suggestions={users} propertyToSearch="first_name" />
      <h1>hola</h1>

      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900 ">
        {users
          // .filter((name) => name.match(new RegExp(textToSearch, "i")))
          .map(user => (
            <li
              className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer"
              key={user.id}
              onClick={() => handleClick(user.id)}
            >
              {`${user.first_name} ${user.last_name}`}
            </li>
          ))}
      </ul>
    </section>
  )
}

export default UserList
