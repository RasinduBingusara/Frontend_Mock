import React from 'react'
import '../CSS/testimonials.css'

function Testimonials() {
  return (
    <>
      <div className='testimonials-container'>

        <div className='testimonials-img'>
          <img src='https://img.icons8.com/?size=100&id=4C2pzaBlIDEO&format=png&color=F47C1F' alt='icon' />
        </div>

        <div className='testimonials-title'>
          <h1>Hear From Our Happy Users</h1>
          <p>SRA, KAFA, SRAI, KAFAI, SRI, SK/SMK, School Cooperatives, Kindergartens, Preschools, Daycare, Maahad, Tahfiz Centers, Madrasahs, Parent-Teacher Associations (PIBG), Tuition Centers, Associations</p>
          <div className='person'>
            <img src='https://img.icons8.com/?size=100&id=4C2pzaBlIDEO&format=png&color=F47C1F' alt='icon' />
            <div className='person-text'>
              <h5>Hakim Aiman</h5>
              <p>Teacher</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Testimonials
