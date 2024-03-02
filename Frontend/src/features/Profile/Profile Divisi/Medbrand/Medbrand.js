import React from "react";
import Navbar from "../../../../component/Navbar/Navbar";
import Footer from "../../../../component/Footer/Footer";
import './Medbrand.css'
import anggota1 from './../../../../Assets/Divisi/Medbrand/Anggota/M Eljalalludin Rummi.png'
import anggota2 from './../../../../Assets/Divisi/Medbrand/Anggota/M Raihan Zhafran H.png'
import anggota3 from './../../../../Assets/Divisi/Medbrand/Anggota/Maysa Fazila L.png'
import anggota4 from './../../../../Assets/Divisi/Medbrand/Anggota/Harits Helmi N.png'
import anggota5 from './../../../../Assets/Divisi/Medbrand/Anggota/Qurrotul Aini.png'
import anggota6 from './../../../../Assets/Divisi/Medbrand/Anggota/Dicky Anugrah.png'
import anggota7 from './../../../../Assets/Divisi/Medbrand/Anggota/Dwiamalina Qurratuain N.png'
import anggota8 from './../../../../Assets/Divisi/Medbrand/Anggota/Hamdan Arif D.png'
import anggota9 from './../../../../Assets/Divisi/Medbrand/Anggota/Ahmad Qaulan S.png'
import anggota10 from './../../../../Assets/Divisi/Medbrand/Anggota/Wisnu Al Hussaeni.png'
import Accordion from "../../../../component/Accordion/Accordion";
import { motion } from "framer-motion";

const Medbrand = () => {
const proker_medbrand = [
        {title: 'Upgrading', description: 'Mengadakan kegiatan workshop online tentang design, branding dan video editing untuk meningkatkan skill individu mengenai fundamental desain, video editing, dan branding'},
        {title: 'Center of Publication (COP)', description: 'Menerima request desain dari berbagai divisi Himalkom untuk dikerjakan sesuai prosedur yang ada.'},
        {title: 'Syntax', description: 'Membuat majalah tahunan yang berisi informasi seputar Himalkom IPB.'},
        {title: 'Launching Kabinet', description: 'Publikasi perkenalan kabinet, divisi, dan anggota divisi berupa feeds instagram.'},
        {title: 'Ramaikan!', description: 'Kegiatan berupa kuis berhadiah, info giveaway, dan kabar mingguan melalui instagram stories Himalkom IPB.'},
        {title: 'Skotteride', description: 'Publikasi berupa maskot, filter, dan guide pada media instagram.'},
        {title: 'Recap Proker', description: 'Recap kegiatan setiap divisi dalam rentang waktu 3-4 bulan. Setelah recap, akan ada post proker apa saja yang akan datang dalam kurun waktu 3-4 bulan ke depan.'},
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
    return (<div>
        <Navbar />

        {/* deskripsi divisi */}
        <section className="medbrand-divisi">
            <div className="medbrand-container">
                <div className="logo-container-medbrand">
                    <br />
                </div>
                
                <motion.div className="info-medbrand"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible">
                    <h2>MEDIA DAN BRANDING</h2>
                    <p>Mebrand merupakan badan yang bertugas untuk membuat, mengelola, dan mengoptimalkan media informasi Himalkom sebagai pusat informasi, mendokumentasikan kegiatan yang diselenggarakan oleh Himalkom, dan menjalin kerja sama dengan media partner untuk meningkatkan branding Himalkom.</p>
                </motion.div>
            </div>
        </section>


        {/* Staff */}
        <section className="medbrand-staff">
            <div className="medbrand-staff-header">
                <h2>STAFF</h2>
            </div>
            <div className="medbrand-anggota">
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota1} alt="M Naufal Daffa Salim" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota2} alt="Dzakiriza Dira Fridman" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota3} alt="Previa Putri Aulia" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota4} alt="Safira Kirei Nisa" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota5} alt="M Khalil Adha" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota6} alt="Daffa Noviansyah" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota7} alt="Andhika Rafi Lazuardi" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota8} alt="M Fahmi Ihsan" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota9} alt="Naufal Faiq R" />
                </motion.div>
                <motion.div
                    whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                    className="anggota-medbrand"
                >
                    <img src={anggota10} alt="Tan Bima Wiragama" />
                </motion.div>
            </div>

            {/* Program Kerja */}
            <motion.div
                whileInView={{ y: [80, 10, 0], opacity: [0, 0, 1] }}
                    transition={{duration: 0.35}}     
                className="medbrand-program"
            >
                <div className="medbrand-program-header">
                    <h2>PROGRAM KERJA</h2>
                </div>

                <Accordion proker_divisi={proker_medbrand} />
            </motion.div>
        </section>





        <Footer />
    </div>);
}

export default Medbrand;