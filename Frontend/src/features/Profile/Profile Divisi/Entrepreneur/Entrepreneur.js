import React from 'react'
import Footer from '../../../../component/Footer/Footer'
import Navbar from '../../../../component/Navbar/Navbar'
import './Entrepreneur.css'
import anggota1 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Tiffany Anastasia J.png'
import anggota2 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Muhammad Hafidz R.png'
import anggota3 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Rusydi Balfas.png'
import anggota4 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Muhammad Bagir S.png'
import anggota5 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Qonita Khairunisa.png'
import anggota6 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Fadhil Mumtaz.png'
import anggota7 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Nabiel Muaafi R.png'
import anggota8 from './../../../../Assets/Divisi/Entrepreneur/Anggota/Sazkia Ananda Z.png'
import Accordion from '../../../../component/Accordion/Accordion'
import { motion } from 'framer-motion'; 



const Entrepreneur = () => {
    const proker_entre = [
        {title: 'Komstore', description: 'Membentuk suatu toko online di marketplace yang menjual produk makanan, merchandise Ilkom, dan barang second hand milik Ilkomerz.'},
        {title: 'Kompreneurs IPB', description: 'Program kerja yang berfokus kepada edukasi entrepreneurship. Selain edukasi, program kerja ini memiliki misi untuk membangkitkan jiwa kewirausahaan masyarakat ilkomerz.'},
        {title: 'BY-I', description: 'Bisnis marketing dari divisi entrepreneur himalkom dimana kita melakukan promosi/marketing dari sebuah produk yang ada di online shop dan mendapatkan keuntungan berupa komisi.'},
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
            
            <section className='divisi-entre'>
                <div className="entre-container">
                    <div className="logo-container-entre">
                        <br />
                    </div>

                    <motion.div className="desc-entre"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible">
                        <h2>ENTRE<br/>
                        PRENEUR</h2>
                        <p>Divisi Entrepreneur merupakan divisi yang mengelola dana usaha guna meningkatkan pemasukan untuk menunjang kegiatan-kegiatan yang diadakan oleh HIMALKOM dari segi keuangan.</p>
                    </motion.div>
                </div>
            </section>

            {/* staff */}
            <section className='stafff'>
                <div className="entre-staff-header">
                    <h2>STAFF</h2>
                </div>
                <div className="entre-anggota">
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota1} alt="Tiffany Anastasia J" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota2} alt="Muhammad Hafidz R" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota3} alt="Rusydi Balfas" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota4} alt="Muhammad Bagir S" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota5} alt="Qonita Khairunisa." />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota6} alt="Fadhil Mumtaz" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota7} alt="Nabiel Muaafi R" />
                    </motion.div>
                    <motion.div
                        whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}    
                        className="anggota-divisi-entre">
                        <img src={anggota8} alt="Sazkia Ananda Z" />
                    </motion.div>
                </div>

                {/* Program Kerja */}
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}    
                    className="entre-program">
                    <div className="program-header-entre">
                        <h2>PROGRAM KERJA</h2>
                    </div>

                    <Accordion proker_divisi={proker_entre} />
                </motion.div>
            </section>
            <Footer />
        </div>
    )
}

export default Entrepreneur;