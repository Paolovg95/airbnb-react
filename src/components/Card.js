import React from 'react'

export default function Card(props) {

  return (
    <div className="card">
        <img src={`../images/${props.img}`} alt="Katie" className="card--image"></img>
        <div className="card--stats">
          <img src="../images/star.png" alt="star"></img>
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount})</span>
          <span className='gray'>* {props.country}</span>
        </div>
      <p>{props.title}</p>
      <p><strong>From ${props.price}/person</strong></p>
    </div>
  )
}
