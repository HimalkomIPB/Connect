import React from 'react'
import './Page.css'
import himalkom from '../../Assets/Logo Himalkom.png'
import connect from '../../Assets/Logo Connect.png'
// import background1 from '../../Assets/Background/BG BULET.png'

const Page = () => {
  return (
    <div className='background'>
      <div className="navbar">
        <div className="navbar-heading">
          <img src={himalkom} alt='himalkom'></img>
        </div>
        <div className="navbar-list">
            <li>Home</li>
            <li>Profil</li>
            <li>Komnews</li>
            <li>Galeri</li>
            <li>Program Kerja</li>
            <li>Komunitas</li>
            <li>Riset</li>
        </div>
      </div>
        <div className="hero">
          <div className="hero-img">
            <img src={connect} alt="connect" />
          </div>
        </div>
    </div>
  )
}

export default Page