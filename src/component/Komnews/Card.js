import React from 'react'
import placeholder_komnews from '../../Assets/Program Kerja/dokum/dokum.svg'

const Card = () => {
  return (
    <div className="Komnews-Home-Content-Card">
        <div className="Komnews-Home-Content">
          <img src={placeholder_komnews} />
          <h2>Placeholder Judul</h2>
          <p>23/12/2023</p>
        </div>
    </div>
  )
}

export default Card