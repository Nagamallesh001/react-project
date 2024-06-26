

import React from 'react'
import "./hero.css"
import { Title } from '../../title/Title';
 const Home = () => {
  return (
    <>
       <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO ACDAEMIA' title='Best Online Education'/>
            <p className='home-para'> Lorem ipsum dolor sit, amet conserctetur adipisicing elit. 
              Consequuntur ipsa sed soluta fuga quisquam, quibusdam ducimus
               officils dignissimos . possimus cupidatate distinctio 
               Lorem ipsum dolor sit, amet conserctetur adipisicing elit. 
              Consequuntur ipsa sed soluta fuga quisquam, quibusdam ducimus
               officils dignissimos . possimus cupidatate distinctio
               Lorem ipsum dolor sit, amet conserctetur adipisicing elit. 
              Consequuntur ipsa sed soluta fuga quisquam, quibusdam ducimus
               officils dignissimos . possimus cupidatate distinctio</p>
               <div className='button'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                  VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
               </div>
          </div>
        </div>
       </section>
    </>
  )
}
export default Home;
