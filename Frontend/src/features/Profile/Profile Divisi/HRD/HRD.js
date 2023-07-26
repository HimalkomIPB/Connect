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
import Accordion from './../../../../component/Accordion/Accordion';
import { motion } from 'framer-motion';


const HRD = () => {
    const proker_hrd = [
        {title: 'ISC', description: 'Merupakan program kerja yang berisikan pertandingan dan perlombaan olahraga maupun seni antar Ilkomerz antar angkatan. Program kerja ini akan dilaksanakan berkolaborasi dengan Divisi Internal.'},
        {title: 'BIOS', description: 'Badan Internal Olahraga dan Seni. Mewadahi Ilkomerz untuk mengembangkan bakat yang dimiliki baik pada bidang olahraga maupun seni.'},
        {title: 'Delegasi Spirit', description: 'SPIRIT merupakan acara tahunan yang diselenggarakan oleh FMIPA IPB sebagai ajang perlombaan sekaligus pencarian bakat mahasiswa FMIPA IPB.'},
        {title: 'I-Convo', description: 'Penerapan penggunaan Bahasa Inggris dalam kehidupan perkuliahan.'},
        {title: 'Hello World', description: 'Kegiatan seminar & workshop terkait penggunaan Bahasa Inggris.'},
        {title: 'Ilkomerz Speak Up!', description: 'Kegiatan seminar/webinar/workshop sebagai bentuk pengembangan soft skill Ilkomerz dalam bidang public speaking atau leadership.'},
        {title: 'Magang Himalkom', description: 'Rekrutmen Ilkomerz angkatan 59 yang ingin ikut mencoba merasakan berperan bersama di dalam Himalkom. Program kerja ini sekaligus berfungsi sebagai media persiapan kepengurusan HIMALKOM IPB periode selanjutnya.'},
    ]
    const fadeInVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: 'easeInOut',
          },
        },
      };
    return (
        <div>
            <Navbar />
            
            {/* Profil Divisi */}
            <section id="profil-divisi-hrd">
                <div className="profil-container-hrd">
                    <div className="logo-container-hrd"/>

                    <motion.div  className="info-divisi-hrd"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible">
                        <h1>HRD</h1>
                        <p>HRD merupakan badan yang bertugas untuk mengembangkan kualitas mahasiswa dalam Himalkom dengan melakukan kegiatan pelatihan yang berhubungan dengan pengembangan kemampuan, potensi, dan keterampilan mahasiswa melalui serangkaian program kerja yang diusung oleh divisi ini.</p>
                    </motion.div>
                </div>
            </section>


            {/* Staff Divisi */}
            <section id="staff-divisi hrd">
                <div className="staff-header-hrd">
                        <h2>STAFF</h2>
                </div>
                
                <div className="anggota-hrd-container">
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota1} alt="Bares Manggala S" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota2} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota3} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota4} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota5} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota6} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota7} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota8} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota9} alt="" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota10} alt="" />
                    </motion.div>
                </div>

                 {/* Program Kerja */}
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}  
                    className="program-divisi-hrd"
                >
                        <div className="program-header-hrd">
                            <h2>PROGRAM KERJA</h2>
                        </div>

                        <Accordion proker_divisi={proker_hrd} />
                </motion.div>

            </section>
            
            <Footer />
        </div>
    );
}

export default HRD