import React from 'react'
import topic1 from "../../Assets/Komnews/Topic/topic_1.png";

const news = (props) => {
  return (
    <div className='topic'>
        <div className='topic-desc'>
            <p>Selected for you</p>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <div className='topic-category'>
                <p>{props.category}</p>
            </div>
        </div>
        <img src={topic1} alt="gambar" width={120} height={120} />
    </div>
  )
}

export default news