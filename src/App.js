import  axios  from 'axios';
import React, { Component } from 'react'
import "./App.css";




class App extends Component {
  
  state = { advice: " " };

  componentDidMount() {
    this.fetchQuotes();

  }



  fetchQuotes = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice} = res.data.slip
        console.log(advice);
        this.setState({advice})
      })
      .catch((err) => {console.log(err)})
  }
  

  render() {
    const {advice} = this.state

    return (
      <div className= "app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchQuotes}>
            <span>
              GET A ADVICE !!
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
