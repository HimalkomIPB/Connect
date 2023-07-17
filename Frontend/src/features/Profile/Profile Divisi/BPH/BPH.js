import React from 'react'
import Navbar from '../../../../component/Navbar/Navbar'
import Footer from "../../../../component/Footer/Footer";
import './BPH.css'
import anggota1 from './../../../../Assets/Divisi/BPH/Anggota/Joachim.png'
import anggota2 from './../../../../Assets/Divisi/BPH/Anggota/Ardra.png'
import anggota3 from './../../../../Assets/Divisi/BPH/Anggota/Afiqah.png'
import anggota4 from './../../../../Assets/Divisi/BPH/Anggota/Nechita.png'
import anggota5 from './../../../../Assets/Divisi/BPH/Anggota/Amelia.png'
import anggota6 from './../../../../Assets/Divisi/BPH/Anggota/Lutfiah.png'
const BPH = () => {
  return (
    <div>
        <Navbar />
        {/* Profil Divisi */}
        <section className="bph-divisi">
                <div className="bph-container">
                    <div className="logo-container">
                        <br />
                    </div>

                    <div className="info-bph">
                        <h2>BADAN PENGURUS HARIAN</h2>
                        <p>Badan Pengurus Harian (BPH), merupakan salah satu badan yang melakukan fungsi kontrol, koordinasi, pengembangan dan peningkatan sistem manajemen administrasi dan keuangan serta komunikasi dalam membangun hubungan internal dan eksternal Himalkom. </p>
                    </div>
                </div>
            </section>
        {/* Staff Divisi */}
        <section className="staff">
            <div className="staff-header">
                <h2>STAFF</h2>
            </div>
            <div className="BPH-anggota">
                <div className="anggota-BPH">
                    <img src={anggota1} alt="kahim Joachim Patrick" />
                </div>
                <div className="anggota-BPH">
                    <img src={anggota2} alt="Wakahim Ahmad Ardra" />
                </div>
                <div className="anggota-BPH">
                    <img src={anggota3} alt="Afiqah" />
                </div>
                <div className="anggota-BPH">
                    <img src={anggota4} alt="Nechita" />
                </div>
                <div className="anggota-BPH">
                    <img src={anggota5} alt="Amelia" />
                </div>
                <div className="anggota-BPH">
                    <img src={anggota6} alt="Lutfiah" />
                </div>
            </div>

            {/* Program Kerja */}
            <div className="BPH-program">
                <div className="program-header">
                    <h2>PROGRAM KERJA</h2>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  );
}

export default BPH