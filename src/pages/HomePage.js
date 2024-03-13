import React from 'react'
import HomeImage from '../images/003 1.png'
import "../Mycss/HomePage.css"
import HomePageHeader from '../Component/HomePageHeader';
import HomeFooter from '../Component/HomeFooter';
import { CHANGANGLogo, CHANGANText, CHANGANTextCHIN } from '../image/image';

const HomePage = () => {

  return (
    <>
      <HomePageHeader />
      <section className='home-page'>
        <div className='selected-car-container'>
          <div className='selectedCar-logo'>
            <img src={CHANGANGLogo} />
          </div>
          <div className='carName-text-container'>
            <img src={CHANGANTextCHIN} />
            <img src={CHANGANText} />
          </div>
          <div className='selectedCar-code'>
            <p>CS85</p>
          </div>
        </div>
        <div className='home_img-container'>
          <img className='home-img' src={HomeImage} alt='error' />
        </div>
        <div className='Detail-container'>
          <div className='view-btn'>
            <button type='button'>View Detail</button>
          </div>
          <div className='reserve-btn'>
            <button type='button'>Reserve Now</button>
          </div>
        </div>
      <HomeFooter />
      </section>
    </>
  )
}

export default HomePage