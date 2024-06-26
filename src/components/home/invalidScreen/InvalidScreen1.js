import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function InvalidScreens() {
   
    const navigate =useNavigate()
    const navigateToMainScreen=()=>{
            navigate("/")
       
    }
  return (
    <div>
        <h3 style={{color:"red"}}>Hey you lost ,please check your direction</h3>

             {/* first way     */}
    {/* <button><Link to={"/"}>  Back to home  </Link> </button> */}


             {/* second way */}

       <button className='invalidScreen' onClick={navigateToMainScreen}>Back to home</button>
    </div>
  )
}

export default InvalidScreens