// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRamdomNum = () => Math.ceil(Math.random() * 100)

  onIncreament = () => {
    const ramdom = this.getRamdomNum()
    this.setState(prevState => ({count: prevState.count + ramdom}))
  }

  render() {
    const {count} = this.state
    const display = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="pera">Count is {display}</p>

          <button type="button" className="button" onClick={this.onIncreament}>
            Increment
          </button>

          <p className="pera1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
