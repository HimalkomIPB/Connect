import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import Logo_HRD from "./../../../../Assets/Divisi/logo_HRD.png";
import "./HRD.css";

const HRD = () => {
    return (
        <div>
            <Navbar />
            
            {/* Profil Divisi */}
            <section className="profil-divisi">
                <div className="profil-container">
                    <div className="logo-container">
                        <img src={Logo_HRD} alt="Logo HRD" className="logo-HRD" />
                    </div>

                    <div  className="info-divisi">
                        <h1>HRD</h1>
                        <p>HRD merupakan badan yang bertugas untuk mengembangkan kualitas mahasiswa dalam Himalkom dengan melakukan kegiatan pelatihan yang berhubungan dengan pengembangan kemampuan, potensi, dan keterampilan mahasiswa melalui serangkaian program kerja yang diusung oleh divisi ini.</p>
                    </div>
                </div>
            </section>


            {/* Staff Divisi */}
            <section className="staff-divisi">


            </section>
            

            {/* Program Kerja */}



            

            

            <Footer />
        </div>
    );
}

export default HRD