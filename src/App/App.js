import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import Form from './Form'

class App extends Component {
  constructor() {
    super()
    this.state = { reservations: []}
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations').then((response) => {
      return response.json()
    }).then(data => {
     return this.setState({ reservations: data})
    })
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] })
  }

  render() {
    return (
      <main>
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='card-container'>
          <Card reservations={this.state.reservations}/> 
        </div>
      </div>
      </main>
    )
  }
}

export default App;
