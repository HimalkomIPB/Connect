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
        <div className="hero" >
          <div className="hero-img">
            <img src={connect} alt="connect" className="hero-image" />
          </div>
          <h1>CONNECT</h1>
          <h3>Together We Connect Each Other</h3>
          <p>Himpunan Mahasiswa Ilmu Komputer 2022/2023</p>
        </div>
        <Ilkommunity />
        <Megaproker />
        <Komnews />
        <Footer />
    </div>
  )
}

export default Page