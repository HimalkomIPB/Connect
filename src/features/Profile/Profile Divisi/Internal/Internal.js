import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import "./Internal.css";
import anggota1 from './../../../../Assets/Divisi/Internal/Anggota/kadiv_abin.png'
import anggota2 from './../../../../Assets/Divisi/Internal/Anggota/anggota_bella.png'
import anggota3 from './../../../../Assets/Divisi/Internal/Anggota/anggota_cheisa.png'
import anggota4 from './../../../../Assets/Divisi/Internal/Anggota/anggota_dzakkiyah.png'
import anggota5 from './../../../../Assets/Divisi/Internal/Anggota/anggota_ilinia.png'
import anggota6 from './../../../../Assets/Divisi/Internal/Anggota/anggota_ismy.png'
import anggota7 from './../../../../Assets/Divisi/Internal/Anggota/anggota_mirza.png'
import anggota8 from './../../../../Assets/Divisi/Internal/Anggota/anggota_adi.png'
import anggota9 from './../../../../Assets/Divisi/Internal/Anggota/anggota_kevin.png'
import anggota10 from './../../../../Assets/Divisi/Internal/Anggota/anggota_novia.png'

const internal = () => {
    return (
        <div>
            <Navbar />

            {/* Profil Divisi */}
            <section className="profil-divisi_internal">
                <div className="profil-container">
                    <div className="logo-container">
                    </div>

                    <div  className="info-divisi">
                        <h1>Internal</h1>
                        <p>Divisi Internal merupakan divisi yang bertugas dan bertanggung jawab dalam meningkatkan internalisasi baik antar pengurus HIMALKOM maupun dengan Ilkomerz secara langsung.</p>
                    </div>
                </div>
            </section>

                        {/* Staff Divisi */}
                        <section className="staff-divisi hrd">
                <div className="staff-header">
                        <h2>STAFF</h2>
                        {/* <img src={line} alt="line" /> */}
                </div>
                <div className="hrd-anggota">
                    <div className="anggota-hrd">
                        <img src={anggota1} alt="AHMAD BINTANG ARIF" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota2} alt="BELLA AGAMA" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota3} alt="CHEISHA AMANDA" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota4} alt="DZAKIYYAH HASBI" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota5} alt="ILLINIA MALIKA PUTRI" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota6} alt="ISMY FANA FILLAH" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota7} alt="MIRZA HAFIZ MUHAMMAD" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota8} alt="M ADI SATRIA FERDIANSAH" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota9} alt="M KEVIN ARIOBIMO" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota10} alt="NOVIA DWI LESTARI" />
                    </div>
                </div>

                 {/* Program Kerja */}
                <div className="program-divisi hrd">
                        <div className="program-header ">
                            <h2>PROGRAM KERJA</h2>
                        </div>
                </div>

            </section>
            

            <Footer />
        </div>
    )
}
export default internal