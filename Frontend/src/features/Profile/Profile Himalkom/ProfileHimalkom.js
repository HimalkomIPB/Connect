import React from "react";
import "./ProfileHimalkom.css";
import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar/Navbar";
import connect from "../../../Assets/Connect/Logo Connect.png";
import line from "./../../../Assets/Profil Himalkom/line.svg";
import BPH from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-BPH.png";
import BP from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-BP.png";
import Edukasi from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Edukasi.png";
import Eksternal from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Eksternal.png";
import Entrepreneur from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Entre.png";
import HRD from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-HRD.png";
import Medbrand from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Medbrand.png";
import Ristek from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Ristek.png";
import Internal from "../../../Assets/Profil Himalkom/Aset Divisi/Divisi-Internal.png";
import kolaborasi from "../../../Assets/Profil Himalkom/Aset Filosopi/Kolaborasi.png";
import invoasi from "../../../Assets/Profil Himalkom/Aset Filosopi/Inovasi.png";
import logoHimalkom from "../../../Assets/Profil Himalkom/LOGO HIMALKOM.svg";
import titleSynapse from "../../../Assets/Profil Himalkom/Title Synapse.svg";
import logoSynapse from "../../../Assets/Profil Himalkom/Logo Synapse.svg";
import {motion} from "framer-motion"
const ProfileHimalkom = () => {
  return (
    <div>
      <Navbar />
        <div
          className="profil-himalkom-hero"
        >
          <div className="outer-container">
            <div className="middle-container">
              <motion.div 
                whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                transition={{duration: 0.35}}
                className="profil-himalkom-img"
              >
                <img src={logoSynapse} alt="connect" className="hero-image" />
              </motion.div>
              <div className="inner-container">
                <motion.h1
                  whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                  transition={{duration: 0.35}} 
                >
                  <img src={titleSynapse} alt="connect" className="hero-title" />
                </motion.h1>
                <motion.h3
                  whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
                  transition={{duration: 0.35}}
                >Synergy, Networking, and Collaboration</motion.h3>
              </div>
            </div>
            <motion.p
            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}}
            >Himpunan Mahasiswa Ilmu Komputer 2022/2023</motion.p>
          </div>
        </div>

      {/* Apa itu HIMALKOM */}
      <section className="Himalkom-intro-container">
        <motion.div 
          className="Himalkom-intro-wrapper"
          whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}} 
        >
          <div className="Himalkom-intro-header">
            <p>Apa itu</p>
            <h1>Himalkom</h1>
          </div>
          <div className="Himalkom-intro-content">
            <img src={logoHimalkom} />
            <p><b>Himpunan Mahasiswa Ilmu Komputer (HIMALKOM) </b>adalah himpunan yang bergerak dalam pengembangan dan eksistensi mahasiswa ilmu Komputer IPB.</p>
          </div>
        </motion.div>
      </section>


      {/* tujuan HIMALKOM */}
      <section className="tujuan-himalkom-container">
        <motion.div 
          className="tujuan-himalkom-wrapper"
          whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}} 
        >
          <h3>Tujuan</h3>
          <h2>HIMALKOM</h2>
          <p>
            Mencerdaskan ilkomerz agar siap dan semangat untuk menjadi
            professional, memperkuat internalisasi, meningkatkan eksistensi, dan
            membangun Ilmu Komputer IPB berdasarkan aspirasi Ilkomerz sehingga
            tercipta hasil yang dahsyat.
          </p>
        </motion.div>
      </section>

      {/* filosopi himalkom */}
      <div className="filop">
        <motion.div 
          className="filop-kiri"
          whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}} 
        >
          <div className="atas">
            <img src={kolaborasi} alt="infinity" className="log-1" />
            <h1 className="title">KOLABORASI DAN KOMUNIKASI</h1>
            <p className="desc">
              Melambangkan inisial kabinet saat ini yaitu S (Synapse)
            </p>
          </div>
          <div className="bawah">
            <h1 className="title">LETTER S</h1>
            <p className="desc">
              Melambangkan ketidakterbataasan dalam menjalin kerjasama
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="filop-tengah"
          whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}} 
        >
          <h3>FILOSOFI LOGO</h3>
          <img src={titleSynapse} alt="synapse" className="logo-image" />
          <img src={logoSynapse} alt="connect" className="c-image" />
          <h1>SYNAPSE</h1>
        </motion.div>
        <motion.div 
          className="filop-kanan"
          whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
          transition={{duration: 0.35}} 
        >
          <div className="atas">
            <img src={invoasi} alt="dua titik" className="log-2" />
            <h1 className="title">
            INOVASI
            </h1>
            <p className="desc">
              Menggambarkan dua insan yang saling terhubung
            </p>
          </div>
          <div className="bawah">
            <h1 className="title">LINGKARAN</h1>
            <p className="desc">
              Setiap divisi harus saling melengkapi antara satu sama lain
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="punchline"
        whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
        transition={{duration: 0.35}} 
      >
        <h2>“SYNERGY, NETWORKING, AND COLLABORATION”</h2>
      </motion.div>

      {/* Divisi Himalkom*/}
      <div className="divisi-container">
        <div className="divisi-background">
          <motion.div 
            className="divisi-span"
            whileInView={{ y: [40, 10, 0], opacity: [0, 0, 1] }}
            transition={{duration: 0.35}} 
          >
            <div className="divisi-header">
              <p>DIVISI</p>
              <h2>HIMALKOM</h2>
            </div>

            <div className="divisi-card">
              {/* BP */}
              <a href="/Badan-Pengawas">
                <div className="divisi">
                  <img src={BP} alt="BP" />
                </div>
              </a>

              {/* BPH */}
              <a href="/BPH">
                <div className="divisi">
                  <img src={BPH} alt="BPH" />
                </div>
              </a>

              {/* EDUKASI */}
              <a href="/Edukasi">
                <div className="divisi">
                  <img src={Edukasi} alt="Edukasi" />
                </div>
              </a>

              {/* EKSTERNAL */}
              <a href="/Eksternal">
                <div className="divisi">
                  <img src={Eksternal} alt="Eksternal" />
                </div>
              </a>

              {/* HRD */}
              <a href="/HRD">
                <div className="divisi">
                  <img src={HRD} alt="HRD" />
                </div>
              </a>

              {/* INTERNAL */}
              <a href="/Internal">
                <div className="divisi">
                  <img src={Internal} alt="Internal" />
                </div>
              </a>

              {/* MEDBRAND */}
              <a href="/Media-Branding">
                <div className="divisi">
                  <img src={Medbrand} alt="Media dan Branding" />
                </div>
              </a>

              {/* RISTEK */}
              <a href="/Riset-Teknologi">
                <div className="divisi">
                  <img src={Ristek} alt="Riset dan Teknologi" />
                </div>
              </a>

              {/* ENTREPRENEUR */}
              <a href="/Entrepreneur">
                <div className="divisi">
                  <img src={Entrepreneur} alt="Entrepreneur" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileHimalkom;
