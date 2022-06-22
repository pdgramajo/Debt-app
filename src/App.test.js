import React from 'react'
import { render, screen } from '@testing-library/react'
// import App from './App'
import Home from './components/Pages/Home'
// import UserContext from './contexts/UserContext'
// import Users from './mocks/Users.mock'

// afterEach(cleanup)

// const renderComponent = () => {
//   jest.mock('../Provider', () => {
//     const React = require('react')
//     const Store = require('../Store').default

//     const StoreContext = React.createContext(new Store())
//     return {
//       StoreContext
//     }
//   })
//   return render(<Home />)
// }

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
