import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import "./HRD.css";
import anggota1 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Bares.png'
import anggota2 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Naufal.png'
import anggota3 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Aul.png'
import anggota4 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Dinda.png'
import anggota5 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Faiz.png'
import anggota6 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Malikus.png'
import anggota7 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Surya.png'
import anggota8 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Ariq.png'
import anggota9 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Rifqy.png'
import anggota10 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Zhafran.png'



const HRD = () => {
    return (
        <div>
            <Navbar />
            
            {/* Profil Divisi */}
            <section className="profil-divisi_hrd">
                <div className="profil-container">
                    <div className="logo-container">
                    </div>

                    <div  className="info-divisi">
                        <h1>HRD</h1>
                        <p>HRD merupakan badan yang bertugas untuk mengembangkan kualitas mahasiswa dalam Himalkom dengan melakukan kegiatan pelatihan yang berhubungan dengan pengembangan kemampuan, potensi, dan keterampilan mahasiswa melalui serangkaian program kerja yang diusung oleh divisi ini.</p>
                    </div>
                </div>
            </section>


            {/* Staff Divisi */}
            <section className="staff-divisi hrd">
                <div className="staff-header">
                        <h2>STAFF</h2>
                </div>
                
                <div className="hrd-anggota">
                    <div className="anggota-hrd">
                        <img src={anggota1} alt="Bares Manggala S" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota2} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota3} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota4} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota5} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota6} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota7} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota8} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota9} alt="" />
                    </div>
                    <div className="anggota-hrd">
                        <img src={anggota10} alt="" />
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
    );
}

export default HRD