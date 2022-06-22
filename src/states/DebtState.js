import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { GET_DEBT, GET_DEBTS } from '../constants/Debt'
import DebtReducer from '../reducers/DebtReducer'
import Debts from '../mocks/Debts.mock'
import DebtContext from '../contexts/DebtContext'

const DebtState = ({ children }) => {
  const initialState = {
    debts: [],
    selectedDebt: null
  }

  const [state, dispatch] = useReducer(DebtReducer, initialState)

  const getDebtsByUserId = userId => {
    dispatch({
      type: GET_DEBTS,
      payload: Debts.filter(d => d.userId === userId)
    })
  }

  const getDebtById = id => {
    dispatch({
      type: GET_DEBT,
      payload: Debts.find(d => d.id === id)
    })
  }

  return (
    <DebtContext.Provider
      value={{
        debts: state.debts,
        selectedDebt: state.selectedDebt,
        getDebtById,
        getDebtsByUserId
      }}
    >
      {children}
    </DebtContext.Provider>
  )
}

export default DebtState

DebtState.propTypes = {
  children: PropTypes.node
}
