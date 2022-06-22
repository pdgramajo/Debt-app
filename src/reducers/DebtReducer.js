import { GET_DEBT, GET_DEBTS } from '../constants/Debt'

const DebtReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case GET_DEBTS:
      return {
        ...state,
        debts: payload
      }
    case GET_DEBT:
      return {
        ...state,
        selectedDebt: payload
      }

    default:
      return state
  }
}

export default DebtReducer
