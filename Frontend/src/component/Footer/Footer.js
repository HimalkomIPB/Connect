import React from 'react'
import './Footer.css'
import himalkom from '../../Assets/Footer/himalkom 96x96.svg'
import logo from '../../Assets/Footer/IPB University 366px.svg'
import synapse from '../../Assets/Footer/Logo Synapse 100x100.svg'
import facebook from '../../Assets/Footer/facebook 24x24.svg'
import instagram from '../../Assets/Footer/instagram 24x24.svg'
import twitter from '../../Assets/Footer/twitter 24x24.svg'
import youtube from '../../Assets/Footer/youtube 24x24.svg'



const Footer = () => {
  return (
    <div className='Footer-background'>
      <div className="Footer">
        <div className="Footer-Logos">
          <img src={himalkom} alt="Himalkom" className='himalkom' />
          <img src={synapse} alt="Connect" className='connect' />
          <img src={logo} alt="IPB University" className='ipb' />
        </div>

        <div className="Footer-social">
          <a href="https://www.facebook.com/himalkom/?locale=id_ID"><img src={facebook} alt="Facebook" /></a>
          <a href="https://www.instagram.com/himalkomipb/"><img src={instagram} alt="Instagram" /></a>
          <a href="https://twitter.com/HimalkomIPB"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.youtube.com/@himalkomipb4653"><img src={youtube} alt="Youtube" /></a>
        </div>

        <div className="Footer-divider">
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
            <b>Copyright © Himalkom 2022. All right reserved.</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer