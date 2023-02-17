import React from 'react'
import './Footer.css'
import himalkom from '../../Assets/Himalkom/himalkom 96x96.png'
import logo from '../../Assets/IPB/Logo IPB university 366px.png'
import connect from '../../Assets/Connect/Logo Connect 160x83.png'
import facebook from '../../Assets/Footer/facebook 24x24.png'
import instagram from '../../Assets/Footer/instagram 24x24.png'
import twitter from '../../Assets/Footer/twitter 24x24.png'
import youtube from '../../Assets/Footer/youtube 24x24.png'




const Footer = () => {
  return (
    <div className='Footer-background'>
      <div className="Footer">
        <div className="Footer-Logos">
          <img src={himalkom} alt="Himalkom" className='himalkom' />
          <img src={logo} alt="IPB University" className='ipb' />
          <img src={connect} alt="Connect" className='connect' />
        </div>

        <div className="Footer-social">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={youtube} alt="Youtube" /></a>
        </div>

        <div className="Footer-divider">
          {/* ceritanya buat divider awkwkwkwkkw */}
          <p></p>
        </div>

        <div className="Footer-address">
          <div className="address">
            <p>Jl. Meranti Wing 20 Kampus IPB,<br />
              Babakan, Kec. Dramaga, Kabupaten Bogor,<br />
              Jawa Barat 16680
            </p>
          </div>
          <div className="contact">
            <p>
              Email: himalkom@apps.ipb.ac.id<br />
              Phone: +62 851-5539-1409
            </p>
          </div>
        </div>
        <div className="Footer-copyright">
          <p>
            Copyright © Himalkom 2022. All right reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer