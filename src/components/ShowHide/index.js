// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstCard: 'none',
    lastCard: 'none',
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: firstCard === 'none' ? 'block' : 'none',
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: lastCard === 'none' ? 'block' : 'none',
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              onClick={this.firstName}
              className="btn-style"
              type="button"
            >
              Show/Hide Firstname
            </button>
            <p className="name-card" style={{display: firstCard}}>
              Joe
            </p>
          </div>
          <div className="card-container">
            <button onClick={this.lastName} className="btn-style" type="button">
              Show/Hide Lastname
            </button>
            <p className="name-card" style={{display: lastCard}}>
              Jones
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
