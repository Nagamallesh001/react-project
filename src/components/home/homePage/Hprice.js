
import React from 'react'
import { Title } from '../../title/Title'
import PricingCard from '../Pricing/PricingCard'

const Hprice =()=> {
  return (
    <>
     <section className='hprice padding'>
        <div className='container'>
            <Title subtitle="our pricing" title="pricing & packages" />
            </div>
            <div className='price container grid'>
                <PricingCard/>
            </div>
    </section>
    </>
  )
}

export default Hprice