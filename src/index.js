import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
  return (
    <div>
      <h1>Unicafe palaute</h1>
    </div>
  )
}

//Käytetään destruktointia näissä!
const Button = ({nappiFunktio, teksti}) => {
  return (
    <button onClick={nappiFunktio}>{teksti}</button>
  )
}

const Statistics = ({aanet}) => {
  return (
    <div>
    <h3>Statistiikka:</h3>
    <p>Hyvä: {aanet.hyva}</p>
    <p>Neutraali: {aanet.neutraali}</p>
    <p>Huono: {aanet.huono}</p>
    </div>
  )
}

const Statistic = ({statsit}) => {
  return (
    <div>
    <p>Keskiarvo: {statsit.keskiarvo.toFixed(1)}</p>
    <p>Hyviä: {statsit.hyvaProsentti.toFixed(1)} %</p>
    </div>
  )
}


class PalauteApp extends React.Component {
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
    //Lasketaan myös hyvaProsentti tässä
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
      <Otsikko />
      <Button nappiFunktio={this.lisaaHyva} teksti="Hyvä" />
      <Button nappiFunktio={this.lisaaNeutraali} teksti="Neutraali" />
      <Button nappiFunktio={this.lisaaHuono} teksti="Huono" />
      <Statistics aanet={this.state} />
      <Statistic statsit={this.state} />
      <p> </p>
      </div>
    )
  }
}

ReactDOM.render(
  <PalauteApp />,
  document.getElementById('root')
)
