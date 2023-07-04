import React from 'react'
import '../styles/index.css'
import '../styles/HeroBanner.css'
import hero from '../assets/hero.png'
import pic from '../assets/pic.jpeg'


const HeroBanner = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={hero} alt='Hero'/>
        </div>
        <div className='hero-content'>
            <div className='text'>
                <p>Hi i'm Ernest Yélian DOSSA</p>
                <h1>Full-Stack Developer.</h1>
            </div>
            <div className='img'>
                <img className='pic-img' src={pic} alt='Pict'/>
            </div> 
        </div>
      
    </div>
  )
}

export default HeroBanner
