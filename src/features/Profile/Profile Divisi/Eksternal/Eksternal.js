import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import line from '../../../../Assets/Divisi/Eksternal/line.svg'
import './Eksternal.css'

const Eksternal = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="eksternal-container">
                    <div className="eksternal-logo">
                        <br />
                    </div>
                    <div className="eksternal-desc">
                        <h2>EKSTERNAL</h2>
                        <p>Eksternal merupakan badan yang bertugas  untuk menjalin hubungan baik dengan pihak kampus meliputi alumni, perguruan tinggi lain,  ORMAWA kampus, serta  lingkungan luar kampus.</p>
                    </div>
                </div>
            </section>

            {/* staff */}
            <section className='staff'>
                <div className="eksternal-header">
                    <h2>STAFF</h2>
                    <img src={line} />
                </div>
                <div className="eksternal-staff">
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                    <div className="anggota-eksternal"></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Eksternal