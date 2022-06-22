import React from 'react'
import UserState from '../../states/UserState'
import Header from '../templates/Header'
import UserList from '../templates/UserList'

const Home = () => {
  return (
    <UserState>
      <Header />
      <UserList />
    </UserState>
  )
}

export default Home
