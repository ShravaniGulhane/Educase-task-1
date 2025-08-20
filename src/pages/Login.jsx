import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'

export default function Login() {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/account')
  }
  return (
    <Screen>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="mobile-header">Signin to your<br/>PopX account</h1>
          <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-600">Email Address</label>
            <input type="email" className="field" placeholder="Enter email address" required />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-600">Password</label>
            <input type="password" className="field" placeholder="Enter password" required />
          </div>
          <button className="btn-primary" type="submit">Login</button>
        </form>
      </div>
    </Screen>
  )
}
