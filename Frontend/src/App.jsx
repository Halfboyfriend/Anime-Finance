import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/userdomain/Register'
import Login from './pages/userdomain/Login'
import Dashboard from './pages/app/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
