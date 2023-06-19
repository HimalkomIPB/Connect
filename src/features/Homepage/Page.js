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

import bgproker1 from './../../Assets/Background/cardproker1.svg'
import bgproker2 from './../../Assets/Background/cardproker2.svg'

import placeholder_komnews from '../../Assets/Program Kerja/dokum/dokum.svg'
import komnews_card_bg from '../../Assets/Background/Komnews-Home-Card.svg'


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
      <div className='ilkommunity-bg'>
        <div className="header">
          <h2 className='ilkommunity-header'>ILKOMMUNITY</h2>
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

      </div>

      {/* Megaproker */}
      <section className="megaproker">
        <div className="container">

          <div className="header">
            <h3 className='proker-header'>MEGAPROKER</h3>
          </div>

          <div className="proker-container">

            <img src={bgproker1} alt="bgproker1" className='bgproker1' />
            <div className="proker proker1">
              <div className='proker--logo--container'>
                <img src={ittoday} alt="ittoday" className='proker--logo' />
              </div>

              <div className='proker--info'>
                <h1 className='judul'>IT TODAY</h1>
                <p className='desc'><span className='bold'>IT Today</span> merupakan serangkaian acara nasional yang bertemakan teknologi informasi dalam dunia Agriculture. Kegiatan ini terdiri atas HackToday (Capture the Flag), UXToday (UI/UX Design), Poster Competition, Workshop. Festival, dan National Seminar mengenai teknologi informasi terkini.
                </p>
                {/* ini ntar dijadiin button yah */}
                <button className='button'><span className='bold'>Selengkapnya</span></button>
              </div>
            </div>

            <img src={bgproker2} alt="bgproker2" className='bgproker2' />
            <div className="proker proker2">
              <div className='proker--logo--container'>
                <img src={riset} alt="riset ilkomerz" className='proker--logo' />
              </div>
              <div className='proker--info'>
                <h1 className='judul'>RISET ILKOMERZ</h1>
                <p className='desc'> <span className='bold'>Riset Ilkomerz</span> merupakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi ilkomerz untuk membangun Himalkom berdasarkan kebutuhan ilkomerz.
                </p>
                {/* ini ntar dijadiin button yah */}
                <button className='button'><span className='bold'>Selengkapnya</span></button>
              </div>
            </div>

          </div>
        </div>


      </section>




      {/* Komnews */}
      <section id='Komnews-Home-container'>
        <div className="Komnews-Home-Header">
          <h2>
            KOMNEWS
          </h2>
        </div>

        <div className="Komnews-Home-Content-Container">
          <div className="Komnews-Home-Content-Card">
              <div className="Komnews-Home-Content">
                <img src={placeholder_komnews} />
                <h2>Placeholder Judul</h2>
                <p>23/12/2023</p>
              </div>
          </div>
          <div className="Komnews-Home-Content-Card">
            <div className="Komnews-Home-Content">
              <img src={placeholder_komnews} />
              <h2>Placeholder Judul</h2>
              <p>23/12/2023</p>
            </div>
          </div>
          <div className="Komnews-Home-Content-Card">
            <div className="Komnews-Home-Content">
              <img src={placeholder_komnews} />
              <h2>Placeholder Judul</h2>
              <p>23/12/2023</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page