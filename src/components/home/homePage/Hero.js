

import React from 'react'
import "./hero.css"
import Home from './Home'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from '../testiomonal/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'
import Footer from '../../footer/Fotter'
import Footer2 from '../../footer/footer2'

const Hero = () => {
  return (
    <>
    <Home/>
    <AboutCard/>
    <HAbout/>
    <Test/>
    <Hblog/>
    <Hprice/>
    <Footer/>
    <Footer2/>
    </>
  )
}
export default Hero