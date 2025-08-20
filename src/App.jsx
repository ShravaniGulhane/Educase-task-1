import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="mobile-shell">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}
