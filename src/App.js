/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Debts from './components/Pages/Debts'
import Home from './components/Pages/Home'

const App = () => {
  return (
    <main className="container w-full min-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Debts />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
