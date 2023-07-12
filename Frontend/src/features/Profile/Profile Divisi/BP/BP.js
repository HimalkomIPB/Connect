import React from 'react'
import Navbar from '../../../../component/Navbar/Navbar'
import Footer from "../../../../component/Footer/Footer";
import './BP.css'
import anggota1 from './../../../../Assets/Divisi/BP/Anggota/Adelia.png'
import anggota2 from './../../../../Assets/Divisi/BP/Anggota/Aditya.png'
import anggota3 from './../../../../Assets/Divisi/BP/Anggota/Aini.png'
import anggota4 from './../../../../Assets/Divisi/BP/Anggota/Arvie.png'
import anggota5 from './../../../../Assets/Divisi/BP/Anggota/Dzaki.png'
import anggota6 from './../../../../Assets/Divisi/BP/Anggota/Dzikri.png'
import anggota7 from './../../../../Assets/Divisi/BP/Anggota/Helga.png'
import anggota8 from './../../../../Assets/Divisi/BP/Anggota/Ikhlas.png'
import anggota9 from './../../../../Assets/Divisi/BP/Anggota/Isti.png'
import logobp from './../../../../Assets/Divisi/BP/logo_bp.png'
const BP = () => {
  return (
    <div>
        <Navbar />
        {/* Profil Divisi */}
        <section className="bp-divisi">
                <div className="bp-container">
                    <div className="logo-container">
                        <br />
                    </div>

                    <div className="info-bp">
                        <h2>BADAN PENGAWAS</h2>
                        <p>Badan Pengawas (BP), merupakan badan yang bertugas dalam mengawasi pelaksanaan rencana kerja dan anggaran secara independen, mengawasi tugas dan wewenang kinerja BPH dan seluruh divisi Himalkom selama satu periode kepengurusan.</p>
                    </div>
                </div>
            </section>
        {/* Staff Divisi */}
        <section className="staff">
            <div className="staff-header">
                <h2>STAFF</h2>
            </div>
            <div className="BP-anggota">
                <div className="anggota-BP">
                    <img src={anggota1} alt="Adelia Novta K.P" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota2} alt="Aditya Mahendra" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota3} alt="Aini Nur Afifah" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota4} alt="M Arvie Reyhan" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota5} alt="M Dzaki Fahreza" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota6} alt="Dzikri Ananda" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota7} alt="Helga Melina P. F" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota8} alt="Muhammad Ikhlas" />
                </div>
                <div className="anggota-BP">
                    <img src={anggota9} alt="Isti Adilia H" />
                </div>
            </div>

            {/* Program Kerja */}
            <div className="BP-program">
                <div className="program-header">
                    <h2>PROGRAM KERJA</h2>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  );
}

export default BP