import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import "./HRD.css";
import anggota1 from './../../../../Assets/Divisi/HRD/Anggota/Habid Fabri A.png'
import anggota2 from './../../../../Assets/Divisi/HRD/Anggota/M Fathur Rahman I.png'
import anggota3 from './../../../../Assets/Divisi/HRD/Anggota/Maulana Ahmad B.png'
import anggota4 from './../../../../Assets/Divisi/HRD/Anggota/Rizkia Deviyanti.png'
import anggota5 from './../../../../Assets/Divisi/HRD/Anggota/Sindi Aprilianti.png'
import anggota6 from './../../../../Assets/Divisi/HRD/Anggota/Tubagus Raihan R.png'
import anggota7 from './../../../../Assets/Divisi/HRD/Anggota/Adittiya Purwansyah.png'
import anggota8 from './../../../../Assets/Divisi/HRD/Anggota/Aszriel Teddy M.png'
import anggota9 from './../../../../Assets/Divisi/HRD/Anggota/Fikri Aulia R.png'
//import anggota10 from './../../../../Assets/Divisi/HRD/Anggota/Anggota-Zhafran.png'
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
                        <img src={anggota1} alt="Habid Fabri A." />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota2} alt="M Fathur Rahman I" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota3} alt="Maulana Ahmad B" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota4} alt="Rizkia Deviyanti" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota5} alt="Sindi Aprilianti" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota6} alt="Tubagus Raihan" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota7} alt="Adittiya Purwansyah" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota8} alt="Aszriel Teddy M" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-hrd"
                    >
                        <img src={anggota9} alt="Fikri Aulia R" />
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