import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import logo from '../IMG/logo.jpg'
import '../CSS/navigationbar.css'
import SideNavigation from'./SideNavigation';

function NavigationBar() {

  const navigate = useNavigate();

  const [sideNav, setSideNav] = useState(false);
  const toggleSideNav = () => {
    setSideNav(!sideNav);
  }
  return (
    <>
      <div className='navigation-bar'>

        <div className='nav-links'>
          <img src={logo} className='logo' />
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/support')}>Support</li>
          </ul>
        </div>

        <div className='nav-buttons'>
          <button onClick={() => navigate('/register')} className='register-button'><div><img src='https://img.icons8.com/?size=100&id=vzz3pT319tME&format=png&color=F47C1F' />Register</div></button>
          <button onClick={() => navigate('/login')} className='login-button'><div><img src='https://img.icons8.com/?size=100&id=86326&format=png&color=000000' />Login</div></button>
        </div>
        <img onClick={toggleSideNav} className='hamburger-menu' src='https://img.icons8.com/?size=100&id=120374&format=png&color=000000' />

        {sideNav && (
          <SideNavigation />)}
      </div>
    </>
  )
}

export default NavigationBar
