import React from 'react'
import Navbar from '../../../../component/Navbar/Navbar'
import Footer from "../../../../component/Footer/Footer";
import './BPH.css'
import anggota1 from './../../../../Assets/Divisi/BPH/Anggota/Synapse_Adzik.png'
import anggota2 from './../../../../Assets/Divisi/BPH/Anggota/Synapse_Zahran.png'
import anggota3 from './../../../../Assets/Divisi/BPH/Anggota/Synapse_Khansa.png'
import anggota4 from './../../../../Assets/Divisi/BPH/Anggota/Synapse_Halida.png'
import anggota5 from './../../../../Assets/Divisi/BPH/Anggota/Synapse_Cindy.png'
import anggota6 from './../../../../Assets/Divisi/BPH/Anggota/Synapse_Viby.png'
import Accordion from '../../../../component/Accordion/Accordion';
import { motion } from 'framer-motion';


const BPH = () => {
    const proker_bph = [
        {title: 'IT Today', description: 'Salah satu megaproker yang diadakan oleh Himpunan Mahasiswa Ilmu Komputer (HIMALKOM) IPB dan departemen Ilmu Komputer IPB. Diselenggarakan pertama kali pada tahun 2003. Menjadi acara tahunan yang sudah berlangsung sebanyak 19 kali. Tiap tahunnya, IT Today berusaha membawakan tema yang berbeda sesuai dengan kondisi dan kebutuhan pada dunia informasi serta teknologi terbaru.'},
        {title: 'CPSC IPB', description: 'Kompetisi yang diselenggarakan oleh BEM fmipa IPB sebagai bentuk dari rangkaian acara Pesta Sains Nasional kompetisi ini menggunakan pendekatan berpikir komputasional untuk memecahkan masalah sederhana bagi siswa SMA/sederajat se-Indonesia.'},
        {title: 'Ilkomerz Night', description: 'Ilkomerz Night merupakan program kerja HIMALKOM IPB sebagai bentuk apresiasi kepada mahasiswa ilmu komputer sekaligus farewell party untuk Ilkomerz 56 dan pengurus HIMALKOM IPB kabinet yang bertugas serta dihadiri oleh dosen Ilmu Komputer dan seluruh Ilkomerz dari semua angkatan.'},
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
            <section className="bph-divisi">
                    <div className="bph-container">
                        <div className="logo-container">
                            <br />
                        </div>

                        <motion.div className="info-bph"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible">
                            <h2>BADAN PENGURUS<br/>
                            HARIAN</h2>
                            <p>Badan Pengurus Harian (BPH), merupakan salah satu badan yang melakukan fungsi kontrol, koordinasi, pengembangan dan peningkatan sistem manajemen administrasi dan keuangan serta komunikasi dalam membangun hubungan internal dan eksternal Himalkom. </p>
                        </motion.div>
                    </div>
                </section>

            {/* Staff Divisi */}
            <section className="staff">
                <div className="staff-header">
                    <h2>STAFF</h2>
                </div>
                <div className="BPH-anggota">
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-BPH"
                    >
                        <img src={anggota1} alt="Muhammad Aulia D" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BPH"
                    >
                        <img src={anggota2} alt="Muhammad Zahran" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BPH"
                    >
                        <img src={anggota3} alt="Khansa Fitri Z" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BPH"
                    >
                        <img src={anggota4} alt="Halida Fiadnin" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BPH"
                    >
                        <img src={anggota5} alt="Cindy Anatasya S" />
                    </motion.div>
                    <motion.div 
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className="anggota-BPH"
                    >
                        <img src={anggota6} alt="Viby Ladyscha Y" />
                    </motion.div>
                </div>

                {/* Program Kerja */}
                <motion.div 
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}
                    className="BPH-program"
                >    
                    <div className="program-header">
                        <h2>PROGRAM KERJA</h2>
                    </div>

                    <Accordion proker_divisi={proker_bph} />
                </motion.div>
            </section>
            <Footer />
        </div>
    );
}

export default BPH