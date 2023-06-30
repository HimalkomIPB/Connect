import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <a className="Komnews-Home-Content-Card" href='/Newsdesc'>
        <div className="Komnews-Home-Content">
          <img src={require('../../Assets/Komnews/Topic/' +  props.img )} alt="gambar" className='newscard_img'/>
          <h2>{props.title}</h2>
          <div className='card_date'>
            <p>{props.date}</p>
          </div>
        </div>
    </a>
  )
}

export default Card