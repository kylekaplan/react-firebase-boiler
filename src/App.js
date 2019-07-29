import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import logo from './assets/logo.svg'
import './App.css'

import Navigation from './Navigation'
import LandingPage from './containers/Landing/Landing'
import SignUpPage from './containers/Auth/SignUp'
import SignInPage from './containers/Auth/SignIn'
import PasswordForgetPage from './containers/Auth/PasswordForget'
import HomePage from './containers/Home/Home'
import AccountPage from './containers/Account/Account'
import AdminPage from './containers/Admin/Admin'

import * as ROUTES from './constants/routes'
import { useFirestoreUser, useStateValue} from './hooks'

const App = () => {
  const [{ user }, dispatch] = useStateValue()
  const userData = useFirestoreUser()
  const { firestoreUser, loading } = userData
  if (user !== firestoreUser) {
    dispatch({
      type: 'changeUser',
      newUser: firestoreUser,
    })
  }
  if (loading) {
    return <h1>Getting user...</h1>
  }
  return (
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />

        <img src={logo} alt="logo" />
      </div>
    </Router>
  )
}

export default App
