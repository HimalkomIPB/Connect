import React, { useState, useEffect } from 'react';
import "./newsdesc.css"
import Card from "../../component/Komnews/Card"
import Data from "../../Data/newsdata"
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { useLocation } from 'react-router-dom';
import { urlFor, client } from '../../client';

const Newsdesc = () => {

    const [Data, setData] = useState([]);
    const [cachedData, setCachedData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        if (cachedData.length === 0) {
            const query = '*[_type == "komnews"]';
            const response = await client.fetch(query);
            setData(response);
            setCachedData(response);
        } else {
        setData(cachedData);
        }
    };
    fetchData();
}, [cachedData]);

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
                        <img src={urlFor(berita.img)} alt="gambar"/>
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