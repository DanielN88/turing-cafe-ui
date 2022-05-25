import React from 'react'
import { Component } from 'react'
import './App.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value })
  }

  sumbitReservation(event) {
    event.preventDefault()
    const newReservation = {
      key: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
  }

  render() {
    return (
    <div>
      <input type='text' name='name' placeholder='Name' value={this.state.name} className='input-box' onChange={event => this.handleChange(event)}></input>
      <input type='text' name='date' placeholder='Date (mm//dd)' value={this.state.date} className='input-box' onChange={event => this.handleChange(event)}></input>
      <input type='text' name='time' placeholder='Time' value={this.state.time} className='input-box' onChange={event => this.handleChange(event)}></input>
      <input type='text' name='number' placeholder='Number of guests' value={this.state.number} className='input-box' onChange={event => this.handleChange(event)}></input>

      <button className='submit-button' onClick={event => this.sumbitReservation(event)}>Make a Reservation</button>
    </div>
    )
  }
}

export default Form