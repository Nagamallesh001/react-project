import React from 'react'
import "./Pricing.css"
import Back from '../back/Back'
import PricingCard from './PricingCard'
import Faq from './Faq'

const Pricing=()=> {
  return (
    <>
       
       <Back title="Choose The Right Plan"/>
       <Faq/>
       <section className='price padding'>
        <div className='container grid'>
          <PricingCard/>
        </div>
       </section>
    </>
  )
}
export default Pricing
