import React from 'react'
import logo from '../IMG/logo.jpg'
import '../CSS/footer.css'
import {useNavigate} from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className='footer-container'>

        <div className='footer-top'>
          <div>
            <h1>Register With <span className='highlight'>kedaisekolah.my</span> For Free</h1>
          </div>
          <button onClick={() => navigate('/register')}>Register For Free &#8594;</button>
        </div>

        <div className='footer-body'>

          <div className='footer-left'>
            <img className='logo' src={logo} />
            <h2>Follow Us On</h2>
            <div className='social-icons'>
              <a href='https://www.facebook.com/' target="_blank"> <img src='https://img.icons8.com/?size=100&id=oFBTOjfVCkaA&format=png&color=FFFFFF' /> </a>
              <a href='https://www.instagram.com/' target="_blank"> <img onClick={() => navigate('/register')} src='https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF' /></a>
              <a href='https://www.tiktok.com/en/' target="_blank"> <img onClick={() => navigate('/register')} src='https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=FFFFFF' /></a>
            </div>
          </div>

          <div className='footer-mid'>
            <span className='footer-title'>Contact Us</span>
            <span className='footer-links' onClick={() => navigate('/')}>Home</span>
            <span className='footer-links' onClick={() => navigate('/about')}>About</span>
            <span className='footer-links' onClick={() => navigate('/support')}>Support</span>
            <span className='footer-links' onClick={() => navigate('/terms-condition')}>Terms & Conditions</span>
          </div>

          <div className='footer-right'>
            <span className='footer-title'>Links</span>
            <span className='footer-links'>Address: B-03-15, 3rd Floor, Block B, One South Mall</span>
            <span className='footer-links'>Phone:  +603-8658 0398 / +603-8658 0399</span>
            <span className='footer-links'>Email: helpdesk@kedaisekolah.my</span>
          </div>

        </div>
        <div className='footer-bottom'>
          <span>© 2024, All Rights Reserved kedaisekolah.my</span>
        </div>
      </div>
    </>
  )
}

export default Footer
