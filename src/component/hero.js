import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/hero.css'
import heroImg from '../IMG/hero-img.jpg'

function Hero() {

  const navigate = useNavigate();
  return (
    <>
      <div className='hero-container'>

        <div className='hero-left'>
          <div className='title'>One <span className='highlight'>Platform</span></div>
          <div className='title'>Multiple <span className='highlight'>Solutions</span></div>
          <div className='subtitle'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ex pulvinar platea, vulputate commodo inceptos nam.</div>
          <div className='button-set'>
            <button onClick={() => navigate('/register')} className='btn-1'>Register For Free &#8594;</button>
            <button onClick={() => navigate('/learn-more')} className='btn-2'>Learn More &#8594;</button>
          </div>
        </div>

        <div className='hero-mid'>
          <img src={heroImg} alt='hero' />
        </div>

        <div className='hero-right'>

          <div> <a href='https://www.facebook.com/' target="_blank"> <img src='https://img.icons8.com/?size=100&id=oFBTOjfVCkaA&format=png&color=FFFFFF' /> </a></div>
          <div> <a href='https://www.instagram.com/' target="_blank"> <img onClick={() => navigate('/register')} src='https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF' /></a></div>
          <div> <a href='https://www.tiktok.com/en/' target="_blank"> <img onClick={() => navigate('/register')} src='https://img.icons8.com/?size=100&id=K6KK5ISTAWwE&format=png&color=FFFFFF' /></a></div>
        </div>
      </div>

      <div className='hero-bottom'>

        <div className='cell'>
          <div><img src='https://img.icons8.com/?size=100&id=4C2pzaBlIDEO&format=png&color=F47C1F' /></div>
          <div className='cell-text'>
            <h2>25688+</h2>
            <p>Registered Users</p>
          </div>
        </div>
        <div className='cell'>
          <div><img src='https://img.icons8.com/?size=100&id=koxq9gNdCw7H&format=png&color=F47C1F' /></div>
          <div className='cell-text'>
            <h2>130+</h2>
            <p>Registered schools</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero
