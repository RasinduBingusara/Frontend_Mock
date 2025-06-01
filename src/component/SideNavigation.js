import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/sidenav.css'

function SideNavigation() {
  const navigate = useNavigate();
  return (
    <>
      <div className='side-nav'>
        <div className='nav-links'>
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/support')}>Support</li>
          </ul>
        </div>

        <div className='nav-buttons'>
          <button onClick={() => navigate('/register')} className='register-button'><div><img src='https://img.icons8.com/?size=100&id=vzz3pT319tME&format=png&color=F47C1F'/>Register</div></button>
          <button onClick={() => navigate('/login')} className='login-button'><div><img src='https://img.icons8.com/?size=100&id=86326&format=png&color=000000'/>Login</div></button>
        </div>
      </div>
    </>
  )
}

export default SideNavigation
