import React from 'react'
import '../CSS/services.css'

function Service() {
  return (
    <>
      <div className='service-main-container'>

        <div className='title-container'>
          <h1>Services We Offer</h1>
        <h1>for free</h1>
        </div>

        <div className='service-container'>

          <div className='service-box'>
            <img src='https://img.icons8.com/?size=100&id=11162&format=png&color=F47C1F' alt='service-icon' />
            <h2>Support Services</h2>
            <p>Lorem ipsum odor amet, consectetuer arcte adipiscing</p>
          </div>

          <div className='service-box'>
            <img src='https://img.icons8.com/?size=100&id=3656&format=png&color=F47C1F' alt='service-icon' />
            <h2>Workshop & Training</h2>
            <p>Lorem ipsum odor amet, consectetuer arcte adipiscing</p>
          </div>

          <div className='service-box'>
            <img src='https://img.icons8.com/?size=100&id=t5GRNS5yIsHP&format=png&color=F47C1F' alt='service-icon' />
            <h2>Free Registration</h2>
            <p>Lorem ipsum odor amet, consectetuer arcte adipiscing</p>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default Service
