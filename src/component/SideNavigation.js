import React from 'react'
import '../CSS/sidenav.css'

function SideNavigation() {
  return (
    <>
      <div className='side-nav'>
        <div className='nav-links'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>

        <div className='nav-buttons'>
          <button className='register-button'><div><img src='https://img.icons8.com/?size=100&id=vzz3pT319tME&format=png&color=F47C1F'/>Register</div></button>
          <button className='login-button'><div><img src='https://img.icons8.com/?size=100&id=vzz3pT319tME&format=png&color=000000'/>Login</div></button>
        </div>
      </div>
    </>
  )
}

export default SideNavigation
