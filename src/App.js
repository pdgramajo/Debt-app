/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Debts from './components/Pages/Debts'
import Home from './components/Pages/Home'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <main className="container w-full min-h-full">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<Debts />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  )
}

export default App
