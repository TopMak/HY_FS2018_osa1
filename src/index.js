import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
  return (
      <h1>{props.kurssi}</h1>
  )
}

const Osa = (props) =>{
  return(
    <div>
    <p>{props.sis} {props.teht}</p>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
    <Osa sis={props.sis1} teht={props.teht1} />
    <Osa sis={props.sis2} teht={props.teht2} />
    <Osa sis={props.sis3} teht={props.teht3} />
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.teht1 + props.teht2 + props.teht3} tehtävää</p>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto sis1={osa1} sis2={osa2} sis3={osa3} teht1={tehtavia1} teht2={tehtavia2} teht3={tehtavia3}  />
      <Yhteensa teht1={tehtavia1} teht2={tehtavia2} teht3={tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
