import { createSlice } from '@reduxjs/toolkit'
// import Api from '../../lib/Api'
import Debts from '../../mocks/Debts.mock'

const debtSlice = createSlice({
  name: 'bebtState',
  initialState: {
    debts: [],
    debtsSelected: []
  },
  reducers: {
    setDebtList: (state, action) => {
      state.debts = action.payload
    },
    setSelectedDebt: (state, action) => {
      state.debtsSelected = action.payload
    }
  }
})

export const { setSelectedDebt, setDebtList } = debtSlice.actions
export default debtSlice.reducer

export const getAllDebts = () => async dispatch => {
  //   const response = await Api.get('users?per_page=12')
  const response = Debts
  dispatch(setDebtList(response))
}
export const getDebtByUserId = userId => async dispatch => {
  //   const response = await Api.get(`users/${id}`)
  const response = Debts.filter(d => d.userId === parseInt(userId))
  dispatch(setSelectedDebt(response))
}
