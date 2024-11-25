import React from 'react'
import { Link } from 'react-router-dom'
import ProductSection from '../components/ProductSection'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <div className="bg-box">
        <img src="images/hero-bg.jpg" alt="" />
      </div>
        <Header />
         <div className='mt' >
            <ProductSection />
         </div>
  

    </div>
  )
}

export default Home