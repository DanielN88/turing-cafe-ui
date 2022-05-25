import React from 'react'
import './App.css'

const Card = (props) => {
  console.log(props, 'props')
  const allCards = props.reservations.map(reservation => {
    return (
    <div className='card'>
      <p>{reservation.id}</p>
      <p>{reservation.name}</p>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>{reservation.number}</p>
    </div>
    )
  })
  
    return (
      <div className='card-box'>
        {allCards}
      </div>
    )
}

export default Card