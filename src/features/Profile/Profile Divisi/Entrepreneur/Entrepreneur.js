import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import line from '../../../../Assets/Divisi/Eksternal/line.svg'
import './Entrepreneur.css'
import anggota1 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota1-irfan.png'
import anggota2 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota2-fatha.png'
import anggota3 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota3-nanda.png'
import anggota4 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota4-raka.png'
import anggota5 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota5-ifdha.png'
import anggota6 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota6-nafy.png'
import anggota7 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota7-iza.png'
import anggota8 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Anggota8-ian.png'

const Entrepreneur = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="entre-container">
                    <div className="entre-logo">
                        <br />
                    </div>
                    <div className="entre-desc">
                        <h2>ENTREPRENEUR</h2>
                        <p>Divisi Entrepreneur merupakan divisi yang mengelola dana usaha guna meningkatkan pemasukan untuk menunjang kegiatan-kegiatan yang diadakan oleh HIMALKOM dari segi keuangan.</p>
                    </div>
                </div>
            </section>

            {/* staff */}
            <section className='staff'>
                <div className="entre-header">
                    <h2>STAFF</h2>
                    <img src={line} alt="line"/>
                </div>
                <div className="entre-staff">
                    <div className="anggota-entre">
                        <img src={anggota1} alt="M Irfan Satriya D" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota2} alt="Fatha Ariya P" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota3} alt="Dwinanda Rizkiansyah" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota4} alt="Raka Irzan Alfian" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota5} alt="Ifdha'Ul Fitri" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota6} alt="M Almal Nafy" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota7} alt="Nismara Mayzalia" />
                    </div>
                    <div className="anggota-entre">
                        <img src={anggota8} alt="Stanislaus Brillant K.W" />
                    </div>
                </div>

                {/* Program Kerja */}
                <div className="entre-program">
                    <div className="program-header">
                        <h2>PROGRAM KERJA</h2>
                        <img src={line} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Entrepreneur