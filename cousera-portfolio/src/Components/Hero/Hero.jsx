import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hi, I'm Oluwatobi Adeyeye Michael</span>, a graphics designer, 
            ui/ux designer and a frontend developer based in Nigeria
        </h1>
        <p>Lorem ipsum dolor sit amet. Qui porro eius est officia ipsum est autem inventore. 
            Eum distinctio dolore ad rerum necessitatibus ut voluptas maxime eos facilis  
            tenetur? Est explicabo impedit qui reiciendis facilis et expedita nisi ut iusto
        </p>
        <div className="hero-section">
            <div className="hero-connect"><AnchorLink className='anchor_link' offset={50} href='#contact'>Connecct With Me</AnchorLink>Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero