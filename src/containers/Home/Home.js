import React from 'react'
import { useStateValue } from '../../hooks'

const Home = () => {
  const [{ user }] = useStateValue()
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <p>
        Hi {user ? user.lastName : 'guest'}
      </p>
    </div>
  )
}

export default Home
