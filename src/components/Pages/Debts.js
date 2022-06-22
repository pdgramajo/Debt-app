import React from 'react'
import DebtState from '../../states/DebtState'
import UserState from '../../states/UserState'
import Header from '../templates/Header'
import UserDetails from '../templates/UserDetails'

const Debts = () => {
  return (
    <UserState>
      <DebtState>
        <Header />
        <UserDetails />
      </DebtState>
    </UserState>
  )
}

export default Debts
