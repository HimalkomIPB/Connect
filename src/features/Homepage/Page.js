import React from 'react'
import './Page.css'
import connect from '../../Assets/Connect/Logo Connect.png'
import Navbar from '../../component/Navbar/Navbar'
import Ilkommunity from '../Ilkommunity/Ilkommunity';
import Megaproker from '../Megaproker/Megaproker';
import Komnews from '../Komnews/Komnews';
import Footer from '../../component/Footer/Footer';



const Page = () => {
  return (
    <div className='background'>
      <Navbar />
        <div className="hero">
          <div className="hero-img">
            <img src={connect} alt="connect" />
            <p>test</p>
          </div>
        </div>
        <Ilkommunity />
        <Megaproker />
        <Komnews />
        <Footer />
    </div>
  )
}

export default Page