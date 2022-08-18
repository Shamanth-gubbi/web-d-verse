import React from 'react'
import "./About.css"
import Header from './Header'
import Info from './Info'
function About() {
  return (
    <div className='big'>
      <Header />
      <div className='about'>
    <img className='bio_pic' src="/images/logo.png" alt="" />
    <Info />
    
    </div>
    </div>
  )
}

export default About
