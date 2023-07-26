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
import Accordion from './../../../../component/Accordion/Accordion';
import { motion } from "framer-motion";

const internal = () => {
    const proker_internal = [
        {title: 'I-PI Unggun', description: 'Malam keakraban untuk seluruh pengurus Himalkom agar pengurus dapat saling mengenal satu sama lain dan semakin akrab.'},
        {title: 'I-Forum', description: 'Sharing session bagi mahasiswa Ilkom yang bersifat insidental (menyesuaikan dengan kebutuhan).'},
        {title: 'I-Nvasion', description: 'Main bareng bersama divisi lain di LPK Tepi Sawah.'},
        {title: 'Delegasi ISC', description: 'Bersama HRD, membantu pencarian delegasi ISC.'},
        {title: 'Dirgahayu Himalkom', description: 'Kegiatan peringatan Dirgahayu HIMALKOM IPB.'},
        {title: 'I-Birthday', description: 'Bentuk perayaan untuk memperingati ulang tahun para pengurus HIMALKOM IPB.'},
        {title: 'Staff of the Month', description: 'Apresiasi bagi staff yang memiliki kerja terbaik di divisinya masing-masing.'},
        {title: 'Ilkomerz Wisudaan', description: 'Bentuk apresiasi sekaligus perayaan dari Ilkomerz aktif untuk merayakan kelulusan Ilkomerz. Program kerja ini akan bekerja sama dengan Divisi Eksternal.'},
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
        <section id="profil-divisi-internal">
                <div className="profil-container-internal">

                    <div className="logo-container-internal"/>

                    <motion.div  className="info-divisi-internal"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible">
                        <h1>Internal</h1>
                        <p>Divisi Internal merupakan divisi yang bertugas dan bertanggung jawab dalam meningkatkan internalisasi baik antar pengurus HIMALKOM maupun dengan Ilkomerz secara langsung.</p>
                    </motion.div>

                </div>
            </section>

        {/* Staff Divisi */}
        <section id="staff-divisi-internal">
          <div className="staff-header-internal">
            <h2>STAFF</h2>
          </div>

          <div className="anggota-internal-container">
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota1} alt="AHMAD BINTANG ARIF" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota2} alt="BELLA AGAMA" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota3} alt="CHEISHA AMANDA" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota4} alt="DZAKIYYAH HASBI" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota5} alt="ILLINIA MALIKA PUTRI" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota6} alt="ISMY FANA FILLAH" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota7} alt="MIRZA HAFIZ MUHAMMAD" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota8} alt="M ADI SATRIA FERDIANSAH" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota9} alt="M KEVIN ARIOBIMO" />
            </motion.div>
            <motion.div 
              whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
              transition={{duration: 0.35}}    
              className="anggota-divisi-internal"
            >
              <img src={anggota10} alt="NOVIA DWI LESTARI" />
            </motion.div>
          </div>

          {/* Program Kerja */}
          <motion.div 
            whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}    
            className="program-divisi-internal"
          >
            <div className="program-header-internal ">
              <h2>PROGRAM KERJA</h2>
            </div>

            <Accordion proker_divisi={proker_internal} />
            
          </motion.div>
        </section>

        <Footer />
      </div>
    );
}
export default internal