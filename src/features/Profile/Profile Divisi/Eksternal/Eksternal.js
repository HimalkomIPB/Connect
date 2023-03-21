import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import line from '../../../../Assets/Divisi/Eksternal/line.svg'
import './Eksternal.css'
import anggota1 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Octa.png'
import anggota2 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Made.png'
import anggota3 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Antonio.png'
import anggota4 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Eva.png'
import anggota5 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Jesslyn.png'
import anggota6 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Jihan.png'
import anggota7 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Ilham.png'
import anggota8 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Cilla.png'
import anggota9 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Maria.png'
import anggota10 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Tita.png'


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
                    <img src={line} alt="line"/>
                    <img src={line} alt="line"/>
                </div>
                <div className="eksternal-staff">
                    <div className="anggota-eksternal">
                        <img src={anggota1} alt="Christy Octaviani H" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota2} alt="Made Althaaf" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota3} alt="Antonio" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota4} alt="Eva Fitriyaningsih" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota5} alt="Jesselyn Gowin" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota6} alt="Jihan Febriharvianti" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota7} alt="Ilham Hakim S" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota8} alt="Priscilla Nur Elia P.G" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota9} alt="Tan Maria Putri" />
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota10} alt="Tita Madriyanti" />
                    </div>
                </div>

                {/* Program Kerja */}
                <div className="eksternal-program">
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

export default Eksternal