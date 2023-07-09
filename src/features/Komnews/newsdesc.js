import React from 'react'
import "./newsdesc.css"
import Card from "../../component/Komnews/Card"
import Data from "../../Data/newsdata"
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { useLocation } from 'react-router-dom';

const Newsdesc = () => {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                title={item.title}
                img={item.img}
                date={item.date}
                desc={item.desc}
                category={item.category}
            />
        )
    })
    const location = useLocation();
    const { berita } = location.state;
return (
    <div>
        <Navbar/>
            <div className='form-desc'>
                <div className='icon-desc'>
                    <div className='icon1'>KOMNEWS</div>
                    <div className='icon2'>{berita.category}</div>
                </div>
                <div className='main-desc'>
                    <h1 className='title-desc'>{berita.title}</h1>
                    <p className='date-desc'>{berita.date}</p>
                    <div className="img-desc">
                        <img src={require('../../Assets/Komnews/Topic/' + berita.img)} alt="gambar"/>
                    </div>
                    <p className='text-desc'>{berita.desc}</p>
                </div>
                <div className='desc-footer'>
                    <h1>TERKAIT</h1>
                    <div className='desc-card'>
                        {cards}
                    </div>
                </div>

            </div>
        <Footer/>
    </div>
  )
}

export default Newsdesc