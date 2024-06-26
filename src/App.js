

import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import Header from "./components/heading/header"
import About from "./components/home/about/About"
import Hero from "./components/home/homePage/Hero"
import InvalidScreens from "./components/home/invalidScreen/InvalidScreen1"
import CoursesHome from "./components/home/AllCourses/CoursesHome"
import Journal from "./components/home/Journal/Journal"
import Contact from "./components/home/Contact/Contact"
import Team from "./components/home/Team/Team"
import Pricing from "./components/home/Pricing/Pricing"

function  App()  {
  return (
    <>  
    <BrowserRouter>
    <Header/> 
  <Routes>
  
     <Route   path='/' exact Component={Hero} />
    <Route   path='/courses'  Component={CoursesHome}  />
    <Route   path='/about'  Component={About}  />
    <Route   path='/team'  Component={Team}  />
    <Route   path='/pricing'  Component={Pricing}  />
    <Route   path='/journal'  Component={Journal}  />
    <Route   path='/contact'  Component={Contact}  />

    {/* <Route path="/:brand/:productID"  Component={ProductDetails} /> */}

    <Route   path='*'  Component={InvalidScreens}  />
  </Routes>
  </BrowserRouter>
      

    </>
  )
}
export default App