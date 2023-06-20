import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Ristek.css'
import line from './../../../.././Assets/Divisi/Ristek/line.svg'
import anggota1 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-ariq.png'
import anggota2 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-giras.png'
import anggota3 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-ayyas.png'
import anggota4 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-althaf.png'
import anggota5 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-mumtaz.png'
import anggota6 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-rifqi.png'
import anggota7 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-khalid.png'
import anggota8 from './../../../../Assets/Divisi/Ristek/Anggota/anggota-irfan.png'

const Ristek = () => {
    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="divisi-ristek">
            <div className="ristek-container">
                <div className="logo-container-ristek">
                    <br />
                </div>
                
                <div className="desc-ristek">
                    <h2>RISET DAN TEKNOLOGI</h2>
                    <p>Ristek merupakan badan yang bertugas untuk melaksanakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi mahasiswa untuk membangun Himalkom, serta melakukan pengembangan pada website Himalkom.</p>
                </div>
            </div>
        </section>


        {/* Staff */}
        <section className="staff">
            <div className="staff-header">
                <h2>STAFF</h2>
                <img src={line} alt="line" />
            </div>
            <div className="ristek-anggota">
                <div className="anggota-divisi">
                    <img src={anggota1} alt="Ariq Rizki Fadhillah L" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota2} alt="Giras Arya Ichsani" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota3} alt="Ayyas Mumtaz Y" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota4} alt="Althaf Nadawir T" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota5} alt="M Mumtaz Sakho" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota6} alt="Rifqi Fauzan A" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota7} alt="Khalid Zia Rabbani" />
                </div>
                <div className="anggota-divisi">
                    <img src={anggota8} alt="M Irfan Abdillah" />
                </div>
            </div>

            {/* Program Kerja */}
            <div className="ristek-program">
                <div className="program-header">
                    <h2>PROGRAM KERJA</h2>
                    <img src={line} alt="line"/>
                </div>
            </div>
        </section>
        <Footer />
    </div>);
}

export default Ristek;