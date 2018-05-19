import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
  return (
    <div>
      <h1>Unicafe palaute</h1>
    </div>
  )
}


class Palaute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  lisaaHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1
    })
  }

  lisaaNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  lisaaHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }

  render(){
    console.log("hyvä", this.state.hyva);
    console.log("neutraali", this.state.neutraali);
    console.log("huono", this.state.huono);
    return (
      <div>
      <button onClick={this.lisaaHyva}>Hyvä</button>
      <button onClick={this.lisaaNeutraali}>Neutraali</button>
      <button onClick={this.lisaaHuono}>Huono</button>
      <h3>Statistiikka:</h3>
      <p>Hyvä: {this.state.hyva}</p>
      <p>Neutraali: {this.state.neutraali}</p>
      <p>Huono: {this.state.huono}</p>
      <p> </p>
      </div>
    )
  }
}

const App = () => {
      return (
        <div>
          <Otsikko />
          <Palaute />
        </div>
      )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
