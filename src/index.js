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
      huono: 0,
      aanetSumma:0,
      keskiarvo:0,
      hyvaProsentti: 0
    }
  }

  //Palaute metodit, keskiarvo suoritetaan kun state asetettu!

  lisaaHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      aanetSumma: this.state.aanetSumma + 1
    }, () => {
      this.laskeKeskiarvo()
    })
  }

  lisaaNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      aanetSumma: this.state.aanetSumma + 1
    }, () => {
      this.laskeKeskiarvo()
    })
  }

  lisaaHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      aanetSumma: this.state.aanetSumma + 1
    }, () => {
      this.laskeKeskiarvo()
    })
  }

  laskeKeskiarvo() {
    let ka = (this.state.hyva*1 + this.state.huono*-1) / this.state.aanetSumma;
    let hp = 0;
    if(this.state.hyva !== 0){
      hp = this.state.hyva / this.state.aanetSumma *100
      console.log("hp: ", hp);
    }
    //console.log("ka: ", ka);
    this.setState({
      keskiarvo: ka,
      hyvaProsentti: hp
    })
  }

  render(){
      console.log("hyvä", this.state.hyva)
      console.log("neutraali", this.state.neutraali)
      console.log("huono", this.state.huono)
      console.log("aanetSumma", this.state.aanetSumma)
      console.log("keskiarvo", this.state.keskiarvo)
      console.log("hyvaProsentti", this.state.hyvaProsentti)

    return (
      <div>
      <button onClick={this.lisaaHyva}>Hyvä</button>
      <button onClick={this.lisaaNeutraali}>Neutraali</button>
      <button onClick={this.lisaaHuono}>Huono</button>
      <h3>Statistiikka:</h3>
      <p>Hyvä: {this.state.hyva}</p>
      <p>Neutraali: {this.state.neutraali}</p>
      <p>Huono: {this.state.huono}</p>
      <p>Keskiarvo: {this.state.keskiarvo.toFixed(1)}</p>
      <p>Hyviä: {this.state.hyvaProsentti.toFixed(1)} %</p>
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
