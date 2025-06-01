import React from 'react'
import '../CSS/testimonials.css'

function Testimonials() {
  return (
    <>
      <div className='testimonials-container'>

        <div className='testimonials-img'>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/025/727/773/small_2x/smiling-young-asian-muslim-woman-holding-book-ai-generated-png.png' alt='icon' />
        </div>

        <div className='testimonials-title'>
          <h1>Hear From Our Happy Users</h1>
          <p>SRA, KAFA, SRAI, KAFAI, SRI, SK/SMK, School Cooperatives, Kindergartens, Preschools, Daycare, Maahad, Tahfiz Centers, Madrasahs, Parent-Teacher Associations (PIBG), Tuition Centers, Associations</p>
          <div className='person'>
            <img src='https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg' alt='icon' />
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
