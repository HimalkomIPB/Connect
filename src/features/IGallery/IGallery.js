import React from 'react'
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./IGallery.css"
import dummy from "../../Assets/IGallery/Arcanon.svg"
const IGallery = () => {
  return (
    <div>
        <Navbar />
        <div id="IG-header-container">
            <div className="IG-header-wrapper">
                <div className="IG-header">
                    <h2>I-GALLERY</h2>
                    <p>I-Gallery adalah platform yang berisi kumpulan projek-projek yang telah dibuat oleh mahasiswa ilmu komputer. I-Gallery menampilkan projek dari setiap mata kuliah berprojek. Tujuan dari I-Gallery adalah untuk menunjukan projek yang telah dibuat oleh mahasiswa ilmu komputer.</p>
                </div>
            </div>
        </div>
        <div className='IG-main'>
          <h1>DAFTAR MATKUL</h1>
          <div className='IG-main-button'>
              <button className='IG-list'>
                <span>Semua</span>
              </button>
              <button className='IG-list' >
                <span>Basis Data</span>
              </button>
              <button className='IG-list'>
                <span>Rekayasa Perangkat Lunak</span>
              </button>
              <button className='IG-list'>
                <span>Grafika Komputer</span>
              </button>
              <button className='IG-list'>
                <span>Analisis Desain Sistem</span>
              </button>
              <button className='IG-list'>
                <span>Desain Pengalaman Pengguna</span>
              </button>
              <button className='IG-list'>
                <span>Pengolahan Citra Digital</span>
              </button>
          </div>
          <div className='IG-main-content'>
            <div className='IG-content'>
              <img className="IG-content-img" src={dummy} />
              <h1 className='IG-content-title'>Arcanon</h1>
              <h1 className='IG-content-category'>Rekayasa Perangkat Lunak</h1>
              <p className='IG-content-desc'>The development of the Arcanon software is expected to improve mental health, facilitate positive social interactions, and enhance the overall quality of life for individuals and society as a whole.</p>
              <h1 className='IG-content-created'>Created by Ipan, Ismy, Zefan KOM 58</h1>
              <button className='IG-button'><span>See Project {'>'}</span></button>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default IGallery