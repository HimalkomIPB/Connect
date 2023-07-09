import React from 'react'
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./IGallery.css"
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
                <span>All</span>
              </button>
              <button className='IG-list' >
                <span>Self Improvement</span>
              </button>
              <button className='IG-list'>
                <span>Social</span>
              </button>
              <button className='IG-list'>
                <span>Kehidupan Mahasiswa</span>
              </button>
              <button className='IG-list'>
                <span>Technology</span>
              </button>
              <button className='IG-list'>
                <span>Data Science</span>
              </button>
              <button className='IG-list'>
                <span>AI</span>
              </button>
              <button className='IG-list'>
                <span>Data Mining</span>
              </button>
              <button className='IG-list'>
                <span>Machine Learning</span>
              </button>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default IGallery