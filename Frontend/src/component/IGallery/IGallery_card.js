import React from 'react'
import "./IGallery_card.css"

const IGallery_card = (props) => {
    const redirectToLink = () => {
        window.open(props.link, '_blank');
    }
  return (
    <div className='IG-content'>
      <img className="IG-content-img" src={require('../../Assets/IGallery/' + props.img + '.svg')} alt="gambar" />
      <h1 className='IG-content-title'>{props.title}</h1>
      <h1 className='IG-content-category'>{props.category}</h1>
      <p className='IG-content-desc'>{props.desc}</p>
      <h1 className='IG-content-created'>Created by <span className='createdby'>{props.created}</span></h1>
      <button className='IG-button' onClick={redirectToLink} ><span>See Project {'>'}</span></button>
    </div>
  )
}

export default IGallery_card