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
                    <div className='proker--logo--container'>
                        <img src={ittoday} alt="ittoday" className='proker--logo'/>
                    </div>
                    <div className='proker--container'>
                        <h1>IT TODAY</h1>
                        <p className='proker--desc'><span className='bold'>IT Today</span> merupakan serangkaian acara nasional yang bertemakan teknologi informasi dalam dunia Agriculture. Kegiatan ini terdiri atas HackToday (Capture the Flag), UXToday (UI/UX Design), Poster Competition, Workshop. Festival, dan National Seminar mengenai teknologi informasi terkini.
                        </p>
                        {/* ini ntar dijadiin button yah */}
                        <button className='button'>Selengkapnya</button>
                    </div>
                </div>
                <div className="main-riset">
                    <div className='proker--logo--container'>
                        <img src={riset} alt="riset ilkomerz" className='proker--logo' />
                    </div>
                    <div className='proker--container'>
                        <h1 className='proker--judul'>RISET ILKOMERZ</h1>
                        <p className='proker--desc'> <span className='bold'>Riset Ilkomerz</span> merupakan kegiatan riset yang ditujukan untuk menjaring minat, pendapat, dan aspirasi ilkomerz untuk membangun Himalkom berdasarkan kebutuhan ilkomerz.
                        </p>
                        {/* ini ntar dijadiin button yah */}
                        <button className='button'>Selengkapnya</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Megaproker