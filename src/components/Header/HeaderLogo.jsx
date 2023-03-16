import React from 'react'
import logo from './logo.svg'

function HeaderLogo() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={logo}
        alt="My Blog Logo"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <h2>My Blog Name</h2>
    </div>
  )
}

export default HeaderLogo
