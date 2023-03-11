import React from 'react'
import Footer from '../../../component/Footer/Footer'
import Navbar from '../../../component/Navbar/Navbar'
import './ProfileHimalkom.css'
import connect from '../../../Assets/Connect/Logo Connect.png'

const ProfileHimalkom = () => {
  return (
    <div>
      <Navbar />
      <div className="hero" >
        <div className="hero-img">
          <img src={connect} alt="connect" className="hero-image" />
        </div>
        <h1>CONNECT</h1>
        <h3>Together We Connect Each Other</h3>
        <p>Himpunan Mahasiswa Ilmu Komputer 2022/2023</p>
      </div>
      <div className="filop">
        <div className="filop-tengah">
          <h3>FILOSOFI LOGO</h3>
          <h1 className="c1">CONNECT</h1>
          <img src={connect} alt="connect" className="c-image" />
          <h1 className="c2">CONNECT</h1>
        </div>
        <div className="filop-kiri"></div>
        <div className="filop-kanan"></div>
      </div>
      <span className='divisi-container'> {/* Divisi Himalkom*/}
        <div className="punchline">
          <h2>TOGETHER WE CONNECT EACH OTHER</h2>
        </div>

        <div className="divisi-header">
          <p>Divisi</p>
          <h2>HIMALKOM</h2>

          <div className="divisi-card">
            {/* BP */}
            <div className="divisi-bp">
              <h2>BP</h2>
            </div>

            {/* BPH */}
            <div className="divisi-bph">
              <h2>BPH</h2>
            </div>

            {/* EDUKASI */}
            <div className="divisi-edukasi">
              <h2>edukasi</h2>
            </div>

            {/* EKSTERNAL */}
            <div className="divisi-eksternal">
              <h2>eksternal</h2>
            </div>

            {/* HRD */}
            <div className="divisi-hrd">
              <h2>HRD</h2>
            </div>

            {/* INTERNAL */}
            <div className="divisi-internal">
              <h2>internal</h2>
            </div>

            {/* MEDBRAND */}
            <div className="divisi-medbrand">
              <h2>medbrand</h2>
            </div>

            {/* RISTEK */}
            <div className="divisi-ristek">
              <h2>ristek</h2>
            </div>

            {/* ENTREPRENEUR */}
            <div className="divisi-entrepreneur">
            <h2>entrepreneur</h2>
            </div>
          </div>
        </div>
      </span>


      <Footer />
    </div >
  )
}

export default ProfileHimalkom