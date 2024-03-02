import React from 'react'
import Navbar from '../../../../component/Navbar/Navbar'
import Footer from "../../../../component/Footer/Footer";
import './BP.css'
import anggota1 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Aditiya_Kadiv.png'
import anggota2 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Irfan.png'
import anggota3 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Rio.png'
import anggota4 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Ikhlas.png'
import anggota5 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Meena.png'
import anggota6 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Giyas.png'
import anggota7 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Putra.png'
import anggota8 from './../../../../Assets/Divisi/BP/Anggota/Synapse_Firoos.png'
import Accordion from '../../../../component/Accordion/Accordion';

import { motion } from 'framer-motion';

const BP = () => {
    const proker_bp = [
        {title: 'Fungsi Legislatif', description: 'Amandemen AD/ART : Penjaringan aspirasi & Peninjauan oleh BP, Menyelenggarakan Musyawarah Kerja (1/3), Menyelenggarakan PEMIRA, dan Pencerdasan Legislasi'},
        {title: 'Fungsi Pengawasan', description: 'Laporan bulanan, Performance Assessment (Mid-Term Evaluation) : Instrumen penilaian : Penilaian P2P, Penilaian BP, dan Survei Kinerja Himalkom, Rapat Kerja, Awal Tahun (Ex- Ante Evaluation), Akhir Tahun (Ex-Post Evaluation)'},
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
            <section className="bp-divisi">
                    <div className="bp-container">
                        <div className="logo-container">
                            <br />
                        </div>

                        <motion.div className="info-bp"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible">
                            <h2>BADAN PENGAWAS</h2>
                            <p>Badan Pengawas (BP), merupakan badan yang bertugas dalam mengawasi pelaksanaan rencana kerja dan anggaran secara independen, mengawasi tugas dan wewenang kinerja BPH dan seluruh divisi Himalkom selama satu periode kepengurusan.</p>
                        </motion.div>
                    </div>
                </section>
            {/* Staff Divisi */}
            <section className="staff">
                <div className="staff-header">
                    <h2>STAFF</h2>
                </div>
                <div className="BP-anggota">
                    <motion.div 
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BP"
                    >
                        <img src={anggota1} alt="Aditiya Mahendra" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BP"
                    >
                        <img src={anggota3} alt="Rio Alvein H" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BP"
                    >
                        <img src={anggota7} alt="Darmawan Setya P" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BP"
                    >
                        <img src={anggota6} alt="M Giyas Wisnu R" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BP"
                    >
                        <img src={anggota2} alt="M Irfan Satriya D" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BP"
                    >
                        <img src={anggota5} alt="M Quwwamul Haq" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}} 
                        className="anggota-BP"
                    >
                        <img src={anggota4} alt="Muhammad Ikhlas" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-BP"
                    >
                        <img src={anggota8} alt="Zaima Firoos Likan" />
                    </motion.div>
                </div>

                {/* Program Kerja */}
                <motion.div 
                    whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}   
                    className="BP-program"
                >
                    <div className="program-header">
                        <h2>PROGRAM KERJA</h2>
                    </div>

                    <Accordion proker_divisi={proker_bp} />
                </motion.div>
            </section>
            <Footer />
        </div>
    );
}

export default BP