import React from 'react'
import "./news.css"

const news = (props) => {
  return (
    <a className='topic' href='/Newsdesc'>
        <div className='topic-desc'>
            <p>Selected for you</p>
            <h1>{props.title}</h1>
            <p>{props.thumbnail}</p>
            <div className='topic-category'>
                <p>{props.category}</p>
            </div>
        </div>
        <img src={require('../../Assets/Komnews/Topic/' +  props.img )} className="news_img" alt="gambar" width={140} height={140} />
    </a>
  )
}

export default news