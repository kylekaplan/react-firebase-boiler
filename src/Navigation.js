import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import { useFirebase } from './hooks'

const Navigation = () => {
  const firebase = useFirebase()
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      </ul>
      <button type="button" onClick={firebase.doSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default Navigation
