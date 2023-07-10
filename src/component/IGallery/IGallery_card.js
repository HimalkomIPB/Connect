import React from 'react'
import "./IGallery_card.css"
import dummy from "../../Assets/IGallery/Arcanon.svg"

const IGallery_card = (props) => {
    const redirectToLink = () => {
        window.open(props.link, '_blank');
    }
  return (
    <div className='IG-content'>
      <img className="IG-content-img" src={dummy} />
      <h1 className='IG-content-title'>{props.title}</h1>
      <h1 className='IG-content-category'>{props.category}</h1>
      <p className='IG-content-desc'>{props.desc}</p>
      <h1 className='IG-content-created'>Created by {props.created}</h1>
      <button className='IG-button' onClick={redirectToLink} ><span>See Project {'>'}</span></button>
    </div>
  )
}

export default IGallery_card