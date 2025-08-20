import { useNavigate } from 'react-router-dom'
import Screen from '../components/Screen'

export default function Signup() {
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    navigate('/account')
  }

  return (
    <Screen>
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="mobile-header">Create your<br/>PopX account</h1>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-600">Full Name*</label>
            <input className="field" placeholder="Marry Doe" required />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600">Phone number*</label>
            <input className="field" placeholder="9876543210" required />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600">Email address*</label>
            <input type="email" className="field" placeholder="marry@gmail.com" required />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600">Password*</label>
            <input type="password" className="field" placeholder="Enter password" required />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600">Company name</label>
            <input className="field" placeholder="Marry Doe" />
          </div>

          <div className="space-y-2">
            <p className="text-xs text-gray-600">Are you an Agency?*</p>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="agency" defaultChecked className="accent-popx-primary" />
                <span className="text-sm">Yes</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="agency" className="accent-popx-primary" />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>

          <button className="btn-primary" type="submit">Create Account</button>
        </form>
      </div>
    </Screen>
  )
}
