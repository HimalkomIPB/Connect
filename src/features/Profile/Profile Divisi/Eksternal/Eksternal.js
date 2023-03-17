import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import line from '../../../../Assets/Divisi/Eksternal/line.svg'
import './Eksternal.css'
import anggota1 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Octa.svg'
import anggota2 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Made.svg'
import anggota3 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Antonio.svg'
import anggota4 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Eva.svg'
import anggota5 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Jesselyn.svg'
import anggota6 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Jihan.svg'
import anggota7 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Ilham.svg'
import anggota8 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Cilla.svg'
import anggota9 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Tan Maria.svg'
import anggota10 from './../../../../Assets/Divisi/Eksternal/Anggota/Anggota-Tita.svg'


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
                </div>
                <div className="eksternal-staff">
                    <div className="anggota-eksternal">
                        <h2>KADIV</h2>
                        <img src={anggota1} alt="Christy Octaviani H" />
                        <h2>CHRISTY OCTAVIANI H</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota2} alt="Made Althaaf" />
                        <h2>MADE ALTHAAF NAUFAL G</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota3} alt="Antonio" />
                        <h2>ANTONIO</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota4} alt="Eva Fitriyaningsih" />
                        <h2>EVA FITRIYANINGSIH</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota5} alt="Jesslyn Gowin" />
                        <h2>JESSELYN GOWIN</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota6} alt="Jihan Febriharvianti" />
                        <h2>JIHAN FEBRIHARVIANTI</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota7} alt="Ilham Hakim S" />
                        <h2>M ILHAM HAKIM S</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota8} alt="Priscilla Nur Elia P.G" />
                        <h2>PRISCILLA NUR ELIA P.G</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota9} alt="Tan Maria Putri" />
                        <h2>TAN MARIA PUTRI A</h2>
                    </div>
                    <div className="anggota-eksternal">
                        <img src={anggota10} alt="Tita Madriyanti" />
                        <h2>TITA MADRIYANTI</h2>
                    </div>
                </div>

                {/* Program Kerja */}
                <div className="eksternal-program">
                    <div className="program-header">
                        <h2>PROGRAM KERJA</h2>
                        <img src={line} alt="line"/>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Eksternal