import React from 'react'
import './Page.css'
import connect from '../../Assets/Connect/Logo Connect.png'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer';
import agriux from '../../Assets/Ilkommunity/Agriux 200 x 200.png'
import CSI from '../../Assets/Ilkommunity/CSI 200 x 200.png'
import agribot from '../../Assets/Ilkommunity/Agribot 200 x 200.png'
import CP from '../../Assets/Ilkommunity/CP 200 x 200.png'
import daming from '../../Assets/Ilkommunity/Daming 200 x 200.png'
import iwdc from '../../Assets/Ilkommunity/IWDC 200 x 200.png'
import gary from '../../Assets/Ilkommunity/Gary 200 x 200.png'
import mad from '../../Assets/Ilkommunity/MAD 200 x 200.png'
import ittoday from '../../Assets/Logo IT Today.png'
import riset from '../../Assets/Logo Riset.png'

const Page = () => {
  return (
    <div className='background'>
      <Navbar />

      {/* Main Page */}
      <div className="hero" >
        <div className="hero-img">
          <img src={connect} alt="connect" className="hero-image" />
        </div>
        <h1>CONNECT</h1>
        <h3>Together We Connect Each Other</h3>
        <p>Himpunan Mahasiswa Ilmu Komputer 2022/2023</p>
      </div>

      {/* Ilkommunity */}
      <div className="header">
        <h2>ILKOMMUNITY</h2>
      </div>
      <div className="ilkommunity">
        <div className="ilkommunity-agriux">
          <img src={agriux} alt="AgriUX" />
          <li>AGRIUX</li>
        </div>
        <div className="ilkommunity-csi">
          <img src={CSI} alt="CSI" />
          <li>CSI</li>
        </div>
        <div className="ilkommunity-agribot">
          <img src={agribot} alt="Agribot" />
          <li>AGRIBOT</li>
        </div>
        <div className="ilkommunity-cp">
          <img src={CP} alt="CP" />
          <li>CP</li>
        </div>
        <div className="ilkommunity-daming">
          <img src={daming} alt="Daming" />
          <li>DAMING</li>
        </div>
        <div className="ilkommunity-iwdc">
          <img src={iwdc} alt="IWDC" />
          <li>IWDC</li>
        </div>
        <div className="ilkommunity-gary">
          <img src={gary} alt="GARY" />
          <li>GARY</li>
        </div>
        <div className="ilkommunity-mad">
          <img src={mad} alt="MAD" />
          <li>MAD</li>
        </div>
      </div>

      {/* Megaproker */}
      <div className="header">
        <h3>MEGAPROKER</h3>
      </div>
      <div className="main">
        <div className="main-ittoday">
          <div className='proker--logo--container'>
            <img src={ittoday} alt="ittoday" className='proker--logo' />
          </div>
          <div className='proker--container'>
            <h1>IT TODAY</h1>
            <p className='proker--desc'><span className='bold'>IT Today</span> merupakan serangkaian acara nasional yang bertemakan teknologi informasi dalam dunia Agriculture. Kegiatan ini terdiri atas HackToday (Capture the Flag), UXToday (UI/UX Design), Poster Competition, Workshop. Festival, dan National Seminar mengenai teknologi informasi terkini.
            </p>
            {/* ini ntar dijadiin button yah */}
            <button className='button'><span className='bold'>Selengkapnya</span></button>
          </div>
        </div>
        <div className="main-riset">
          <div className='proker--logo--container'>
            <img src={riset} alt="riset ilkomerz" className='proker--logo' />
          </div>
          <div className='proker--container'>
            <h1 className='proker--judul'>RISET ILKOMERZ</h1>
            <p className='proker--desc'> <span className='bold'>Riset Ilkomerz</span> merupakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi ilkomerz untuk membangun Himalkom berdasarkan kebutuhan ilkomerz.
            </p>
            {/* ini ntar dijadiin button yah */}
            <button className='button'><span className='bold'>Selengkapnya</span></button>
          </div>
        </div>
      </div>


      {/* Komnews */}
      <div className="header">
        <h2>
          KOMNEWS
        </h2>
      </div>

      <Footer />
    </div>
  )
}

export default Page