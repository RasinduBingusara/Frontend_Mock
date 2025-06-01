import {React, useState} from 'react'
import logo from '../IMG/logo.jpg'
import '../CSS/navigationbar.css'
import SideNavigation from'./SideNavigation';

function NavigationBar() {

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
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>

        <div className='nav-buttons'>
          <button className='register-button'><div><img src='https://img.icons8.com/?size=100&id=vzz3pT319tME&format=png&color=F47C1F' />Register</div></button>
          <button className='login-button'><div><img src='https://img.icons8.com/?size=100&id=vzz3pT319tME&format=png&color=000000' />Login</div></button>
        </div>
        <img onClick={toggleSideNav} className='hamburger-menu' src='https://img.icons8.com/?size=100&id=120374&format=png&color=000000' />

        {sideNav && (
          <SideNavigation />)}
      </div>
    </>
  )
}

export default NavigationBar
