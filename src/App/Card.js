import React from 'react'
import './App.css'

const Card = (props) => {
  const allCards = props.reservations.map(reservation => {
    return (
    <div className='card'>
      {/* <p className='p1'>{reservation.id}</p> */}
      <p className='p1'>{reservation.name}</p>
      <p className='p2'>{reservation.date}</p>
      <p className='p3'>{reservation.time} pm</p>
      <p className='p4'>Number of guests: {reservation.number}</p>
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