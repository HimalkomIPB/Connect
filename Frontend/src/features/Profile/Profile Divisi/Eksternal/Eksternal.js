import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
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
import Accordion from './../../../../component/Accordion/Accordion';
import { motion } from 'framer-motion';


const Eksternal = () => {
    const proker_eksternal = [
        {title: 'I-Talks', description: 'Acara talkshow seru bersama ILkomerz 55 yang membahas tentang persiapan memulai karir di dunia Ilmu Komputer.'},
        {title: 'I-Training', description: 'Tips & trick lolos tes seleksi kerja di perusahaan bersama Ilkomerz 55.'},
        {title: 'Webinar Series', description: 'Membahas dunia karir, tips n trick, serta teknologi yang bekerja sama dengan perusahaan-perusahaan terkait.'},
        {title: 'Expo', description: 'Expo terdiri dari career expo, scholarship expo, achievement expo, prestasi perusahaan, prestasi scholarship, performance (tarian dan nyanyian), talkshow yang diisi oleh alumni dan content creator/influencer, serta terdapat konsultasi karir.'},
        {title: 'I-Visit', description: 'Program kerja berupa kunjungan, baik dari Ilkom ke industri maupun dari industri ke Ilkom.'},
        {title: 'I-Collab', description: 'Program kerja berupa studi banding ke/dari organisasi lain, baik di dalam kampus maupun luar kampus.'},
        {title: 'LPK Tepi Sawah', description: 'Program kerja berupa pengabdian Ilkomerz mengajar anak-anak di LPK Tepi Sawah. IG : @sahabattepisawah'},
        {title: 'Partnership & Event Collaborative', description: 'Menerima dan mengelola segala macam bentuk penawaran kerja sama.'},
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
            <section id="profil-divisi-eksternal">
                <div className="profil-container-eksternal">
                    
                    <div className="logo-container-eksternal"/>

                    <motion.div className="info-divisi-eksternal"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible">
                        <h1>EKSTERNAL</h1>
                        <p>Eksternal merupakan badan yang bertugas  untuk menjalin hubungan baik dengan pihak kampus meliputi alumni, perguruan tinggi lain,  ORMAWA kampus, serta  lingkungan luar kampus.</p>
                    </motion.div>
                </div>
            </section>

            {/* staff Divisi */}
            <section id='staff-divisi-internal'>
                <div className="staff-header-internal">
                    <h2>STAFF</h2>
                </div>

                <div className="anggota-eksternal-container">
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}   
                        className="anggota-divisi-eksternal">
                        <img src={anggota1} alt="Christy Octaviani H" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota2} alt="Made Althaaf" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota3} alt="Antonio" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota4} alt="Eva Fitriyaningsih" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota5} alt="Jesselyn Gowin" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota6} alt="Jihan Febriharvianti" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota7} alt="Ilham Hakim S" />
                    </motion.div>
                    <motion.div 
                        className="anggota-divisi-eksternal">
                        <img src={anggota8} alt="Priscilla Nur Elia P.G" />
                    </motion.div>
                    <motion.div 
                        className="anggota-divisi-eksternal">
                        <img src={anggota9} alt="Tan Maria Putri" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}  
                        className="anggota-divisi-eksternal">
                        <img src={anggota10} alt="Tita Madriyanti" />
                    </motion.div>
                </div>

                {/* Program Kerja */}
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}  
                    className="program-divisi-eksternal">
                    <div className="program-header-eksternal">
                        <h2>PROGRAM KERJA</h2>
                    </div>

                    <Accordion proker_divisi={proker_eksternal} />
                </motion.div>

            </section>

            <Footer />
        </div>
    )
}

export default Eksternal