import React, { useState, useEffect } from 'react';
import "./newsdesc.css"
import Card from "../../component/Komnews/Card"
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { useLocation } from 'react-router-dom';
import { urlFor, client } from '../../client';
import {motion} from "framer-motion"

const Newsdesc = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const query = '*[_type == "komnews"]';
          const response = await client.fetch(query);
          setData(response);
        } catch (error) {
          console.error('Error fetching data from Sanity:', error);
        }
      };
  
      fetchData();
    }, []);

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
                        <img src={urlFor(berita.img).url()} alt="gambar"/>
                    </div>
                    <p className='text-desc'>{berita.desc}</p>
                </div>
                <div className='desc-footer'>
                    <h1>TERKAIT</h1>
                    <motion.div 
                        whileInView={{ y: [80, 40, 0], opacity: [0, 0, 1] }}
                        transition={{duration: 0.35}}
                        className='desc-card'
                    >
                        {cards}
                    </motion.div>
                </div>

            </div>
        <Footer/>
    </div>
  )
}

export default Newsdesc