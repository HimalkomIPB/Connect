import React from 'react'
import Footer from '../../../component/Footer/Footer'
import Navbar from '../../../component/Navbar/Navbar'

const ProfileHimalkom = () => {
  return (
    <div>
      <Navbar />

      <span> {/* Divisi Himalkom*/}
        <div className="punchline">
          <h2>TOGETHER WE CONNECT EACH OTHER</h2>
        </div>

        <div className="divisi-header">
          <p>Divisi</p>
          <h2>HIMALKOM</h2>

          <div className="divisi-card">
            {/* BP */}
            <div className="divisi-bp">

            </div>

            {/* BPH */}
            <div className="divisi-bp">

            </div>

            {/* EDUKASI */}
            <div className="divisi-bp">

            </div>

            {/* EKSTERNAL */}
            <div className="divisi-bp">

            </div>

            {/* HRD */}
            <div className="divisi-bp">

            </div>

            {/* INTERNAL */}
            <div className="divisi-bp">

            </div>

            {/* MEDBRAND */}
            <div className="divisi-bp">

            </div>

            {/* RISTEK */}
            <div className="divisi-bp">

            </div>

            {/* ENTREPRENEUR */}
            <div className="divisi-bp">

            </div>
          </div>
        </div>
      </span>


      <Footer />
    </div >
  )
}

export default ProfileHimalkom