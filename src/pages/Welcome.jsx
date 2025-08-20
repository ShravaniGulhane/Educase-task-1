import { Link } from 'react-router-dom'
import Screen from '../components/Screen'

export default function Welcome() {
  return (
    <Screen>
      <div className="h-full flex flex-col justify-end gap-6">
        <div className="space-y-2">
          <h1 className="mobile-header">Welcome to PopX</h1>
          <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        <div className="space-y-3 pb-4">
          <Link to="/signup" className="btn-primary block text-center">Create Account</Link>
          <Link to="/login" className="w-full rounded-lg bg-popx-primary/10 text-popx-primary font-medium py-3 block text-center">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </Screen>
  )
}
