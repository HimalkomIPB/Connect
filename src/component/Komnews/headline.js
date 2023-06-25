import React from 'react'
import gambar from "./../../Assets/Komnews/Headline/image.png";

const headline = () => {
  return (
    <div className='Headline'>
        <div className='title-head'>
          <h1>TODAY HEADLINE</h1>
        </div>
        <div className='headline'>
          <div className='desc-news'>
            <h1>Pelantikan Rektor IPB University Periode 2023-2028</h1>
            <p>Pada 18 Januari 2023 bertempat di Grha Widya Wisuda (GWW) Kampus IPB Dramaga, Bogor dilangsungkan Sidang Paripurna Terbuka Majelis Wali Amanat (MWA) IPB University dengan agenda Pelantikan Rektor IPB University Periode 2023-2028. Prof Arif Satria terpilih sebagai Rektor IPB University periode 2023-2028. Prof Arif Satria menjadi rektor terpilih berdasarkan hasil putusan MWA IPB University dalam Sidang Paripurna Tertutup yang digelar di IPB International Convention Center (IICC), Bogor, (9/11). Ini adalah periode kedua jabatan Prof Arif Satria sebagai Rektor IPB University</p>
            <button className='button'><span className='bold'>Read More {'>'}</span></button>
          </div>
          <div className='image'>
            <img src={gambar} alt="gambar" width={344}/>
          </div>
        </div>
    </div>
  )
}

export default headline