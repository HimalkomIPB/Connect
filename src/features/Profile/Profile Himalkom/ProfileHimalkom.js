import React from 'react'
import Footer from '../../../component/Footer/Footer'
import Navbar from '../../../component/Navbar/Navbar'
import './ProfileHimalkom.css'
import connect from '../../../Assets/Connect/Logo Connect.png'
import line from './../../../Assets/Profil Himalkom/line.svg'
import BPH from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-BPH.png'
import BP from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-BP.png'
import Edukasi from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Edukasi.png'
import Eksternal from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Eksternal.png'
import Entrepreneur from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Entre.png'
import HRD from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-HRD.png'
import Medbrand from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Medbrand.png'
import Ristek from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Ristek.png'
import Internal from '../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Internal.png'




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
      <div className="punchline">
        <h2>“TOGETHER WE CONNECT EACH OTHER”</h2>
      </div>

      {/* Divisi Himalkom*/}
      <div className="divisi-container">

        <div className="divisi-background">

          <div className="divisi-header">
            <p>DIVISI</p>
            <h2>HIMALKOM</h2>
            <img src={line} alt="line" />
          </div>

          <div className="divisi-card">
            {/* BP */}
            <div className="divisi">
              <img src={BP} alt="BP" />
            </div>

            {/* BPH */}
            <div className="divisi">
              <img src={BPH} alt="BPH" />
            </div>

            {/* EDUKASI */}
            <div className="divisi">
              <img src={Edukasi} alt="Edukasi" />
            </div>

            {/* EKSTERNAL */}
              <div className="divisi">
                <img src={Eksternal} alt="Eksternal" />
              </div>

            {/* HRD */}
            <div className="divisi">
              <img src={HRD} alt="HRD" />
            </div>

            {/* INTERNAL */}
            <div className="divisi">
              <img src={Internal} alt="Internal" />
            </div>

            {/* MEDBRAND */}
            <div className="divisi">
              <img src={Medbrand} alt="Media dan Branding" />
            </div>

            {/* RISTEK */}
            <div className="divisi">
              <img src={Ristek} alt="Riset dan Teknologi" />
            </div>

            {/* ENTREPRENEUR */}
            <div className="divisi">
              <img src={Entrepreneur} alt="Entrepreneur" />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div >
  )
}

export default ProfileHimalkom