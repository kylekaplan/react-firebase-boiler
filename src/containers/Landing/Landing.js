import React from 'react'
import { useStateValue } from '../../hooks'

const Landing = () => {
  const [{ user }] = useStateValue()
  return (
    <div>
      <h1>
        Landing Page
      </h1>
      <p>
        Hi {user ? user.firstName : 'guest'}
      </p>
    </div>
  )
}

export default Landing
