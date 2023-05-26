import React from 'react'
import './Ilkommunity.css'
import agriux from '../../Assets/Ilkommunity/Agriux 200 x 200.png'
import CSI from '../../Assets/Ilkommunity/CSI 200 x 200.png'
import agribot from '../../Assets/Ilkommunity/Agribot 200 x 200.png'
import CP from '../../Assets/Ilkommunity/CP 200 x 200.png'
import daming from '../../Assets/Ilkommunity/Daming 200 x 200.png'
import iwdc from '../../Assets/Ilkommunity/IWDC 200 x 200.png'
import gary from '../../Assets/Ilkommunity/Gary 200 x 200.png'
import mad from '../../Assets/Ilkommunity/MAD 200 x 200.png'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'

const Ilkommunity = () => {
  return (
    <div>
      <Navbar />
      <div className='ilkommunity-bg'>
        <div className="header">
          <h2 className='ilkommunity-header'>ILKOMMUNITY</h2>
        </div>
        <div className="ilkommunity">
          <div className="ilkommunity-agriux">
            <a href="/Ilkommunity-AgriUX">
              <img src={agriux} alt="AgriUX" />
              <li>AGRIUX</li>
            </a>
          </div>
          <a href='/Ilkommunity-CSI'>
            <div className="ilkommunity-csi">
              <img src={CSI} alt="CSI" />
              <li>CSI</li>
            </div>
          </a>
          <a href="Ilkommunity-Agribot">
            <div className="ilkommunity-agribot">
              <img src={agribot} alt="Agribot" />
              <li>AGRIBOT</li>
            </div>
          </a>
          <a href="/Ilkommunity-CP">
            <div className="ilkommunity-cp">
              <img src={CP} alt="CP" />
              <li>CP</li>
            </div>
          </a>
          <a href="/Ilkommunity-DAMING">
            <div className="ilkommunity-daming">
              <img src={daming} alt="Daming" />
              <li>DAMING</li>
            </div>
          </a>
          <a href="/Ilkommunity-IWDC">
            <div className="ilkommunity-iwdc">
              <img src={iwdc} alt="IWDC" />
              <li>IWDC</li>
            </div>
          </a>
          <div className="ilkommunity-gary">
            <img src={gary} alt="GARY" />
            <li>GARY</li>
          </div>
          <a href="/Ilkommunity-MAD">
            <div className="ilkommunity-mad">
              <img src={mad} alt="MAD" />
              <li>MAD</li>
            </div>
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Ilkommunity