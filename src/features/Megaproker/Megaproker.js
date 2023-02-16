import React from 'react'
import './Megaproker.css'
import ittoday from '../../Assets/Logo IT Today.png'
import riset from '../../Assets/Logo Riset.png'

const Megaproker = () => {
    return (
        <div>
            <div className="header">
                <h3>MEGAPROKER</h3>
            </div>
            <div className="main">
                <div className="main-ittoday">
                    <h1>IT TODAY</h1>
                    <img src={ittoday} alt="ittoday" />
                    <p>IT Today merupakan serangkaian acara nasional yang bertemakan teknologi informasi dalam dunia Agriculture. Kegiatan ini terdiri atas HackToday (Capture the Flag), UXToday (UI/UX Design), Poster Competition, Workshop. Festival, dan National Seminar mengenai teknologi informasi terkini.
                    </p>
                    {/* ini ntar dijadiin button yah */}
                    <button  className='button'>Selengkapnya</button>
                </div>
                <div className="main-Riset">
                    <h1>RISET ILKOMERZ</h1>
                    <img src={riset} alt="riset ilkomerz" />
                    <p> Riset Ilkomerz merupakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi ilkomerz untuk membangun Himalkom berdasarkan kebutuhan ilkomerz.
                    </p>
                    {/* ini ntar dijadiin button yah */}
                    <button className='button'>Selengkapnya</button>
                </div>
            </div>
        </div>
    )
}

export default Megaproker