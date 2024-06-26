import React from 'react'
import Back from '../back/Back'
import JournalCord from './JournalCard'
  
   const Journal=()=> {
    return (
      <>
      <Back title="Journal Posts"/>
      <section className='blog padding'>
        <div className='container grid'>
            <JournalCord/>
        </div>
      </section>
      
      </>
    )
  }
  
  export default Journal