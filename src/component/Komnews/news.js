import React from 'react'

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
        <img src={require('../../Assets/Komnews/Topic/' +  props.img + '.png')} alt="gambar" width={120} height={120} />
    </div>
  )
}

export default news