import React from 'react'
import '../CSS/features.css'
import logo from '../IMG/logo.jpg'

function Features() {
  return (
    <>
      <div className='main-container'>
        <div className='feature-title'>Designed for Your <span className='highlight'>Ease</span></div>

        <div className='features-container'>

          <div className='left-box'>
            <div className='box-container'>
              <img src='https://img.icons8.com/?size=100&id=osB7pidovOHs&format=png&color=263F82' />
              <div>
                <div className='box-title'>Easy Online Transactions</div>
                <div className='box-subtitle'>Lorem ipsum odor amet, consectetuer adipiscing. pulvinar platea,</div>
              </div>
            </div>

            <div className='box-container'>
              <img src='https://img.icons8.com/?size=100&id=5lpFJPc4a1WR&format=png&color=263F82' />
              <div>
                <div className='box-title'>Audit-Compliant Reporting</div>
                <div className='box-subtitle'>Lorem ipsum odor amet, consectetuer adipiscing. pulvinar platea,</div>
              </div>
            </div>


            <div className='box-container'>
              <img src='https://img.icons8.com/?size=100&id=60693&format=png&color=263F82' />
              <div>
                <div className='box-title'>Automated Ordering Receipts</div>
                <div className='box-subtitle'>Lorem ipsum odor amet, consectetuer adipiscing. pulvinar platea,</div>
              </div>
            </div>

          </div>

          <div className='mid-box'>
            <img src='https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-cell-phone-mockup-png-image_6584021.png' />
            <button>Register Now &#8594;</button>
            <img src={logo} alt='logo' className='logo' />
          </div>

          <div className='right-box'>
            <div className='box-container'>
              <img src='https://img.icons8.com/?size=100&id=3005&format=png&color=263F82' />
              <div>
                <div className='box-title'>Real-Time Data & Analysis</div>
                <div className='box-subtitle'>Lorem ipsum odor amet, consectetuer adipiscing. pulvinar platea,</div>
              </div>
            </div>
            <div className='box-container'>
              <img src='https://img.icons8.com/?size=100&id=180&format=png&color=263F82' />
              <div>
                <div className='box-title'>Secure Cloud Storage</div>
                <div className='box-subtitle'>Lorem ipsum odor amet, consectetuer adipiscing. pulvinar platea,</div>
              </div>
            </div>
            <div className='box-container'>
              <img src='https://img.icons8.com/?size=100&id=112468&format=png&color=263F82' />
              <div>
                <div className='box-title'>Monitoring System</div>
                <div className='box-subtitle'>Lorem ipsum odor amet, consectetuer adipiscing. pulvinar platea,</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Features
