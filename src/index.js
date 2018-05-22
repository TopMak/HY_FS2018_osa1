import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({nappiFunktio, teksti}) => {
  return (
    <button onClick={nappiFunktio}>{teksti}</button>
  )
}

const MostVotes = ({eniten, aania}) => {
  console.log("MostVotes rendered");
  if(aania === 0){
    return <p>Ei ääniä annettu</p>
  } else{
    return <p>{eniten} (Ääniä: {aania})</p>
  }

}

class App extends React.Component {
  constructor(props) {
    super(props)

    //Korvattu tilan alustuksessa toisella tavalla
    // let aanetAlussa = []
    // anecdotes.forEach((item)=> {aanetAlussa.push(0)})

    this.state = {
      selected: Math.floor(Math.random() * props.anecdotes.length),
      aanet: Array(props.anecdotes.length).fill(0),
      enitenIndeksi: 0
    }
  }

  //Voisi olla myös aanet pituus
  arvoSeuraava = () => {
    this.setState({
      selected: Math.floor(Math.random() * this.props.anecdotes.length)
    })
  }

  aanesta = () => {
    let aanetUusi = this.state.aanet
    aanetUusi[this.state.selected] += 1
    this.setState({
      aanet: aanetUusi
    }, this.tarkistaEnitenAania(this.state.aanet))
  }

  //Ensimmäisenä arrayssa oleva artikkeli, jolla suurin ääniarvo, tulee valittua näytettäväksi
  //Tarkistetaan aina kun äänestyspainiketta painetaan
  tarkistaEnitenAania(arr){
    console.log("tarkistetaan aanet");
    let isoimmanIndeksi = 0
    let arvo = 0
    arr.forEach((item, indeksi) => {
        if(arvo < item){
          isoimmanIndeksi = indeksi
          arvo = item
        }
    })

    if(arvo === 0){
      return
    } else {
      this.setState({
        enitenIndeksi: isoimmanIndeksi
      })
    }
  }

  render() {
    console.log(this.state.aanet)
    return (
      <div>
        <h2>Totuuksia:</h2>
        <Button nappiFunktio={this.arvoSeuraava} teksti="Seuraava Anekdootti" />
        <Button nappiFunktio={this.aanesta} teksti="Äänestä" />
        <h3>{this.props.anecdotes[this.state.selected]}</h3>
        <p>Ääniä {this.state.aanet[this.state.selected]}</p>
        <h3>Eniten ääniä:</h3>
        <MostVotes eniten={this.props.anecdotes[this.state.enitenIndeksi]} aania={this.state.aanet[this.state.enitenIndeksi]} />
      </div>
    )
  }
}

const anecdotes2 = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes2} />,
  document.getElementById('root')
)
