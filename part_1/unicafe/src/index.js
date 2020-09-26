//final version of index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>{props.text}</h1>
const Button = props => <button onClick={props.onClick}>{props.text}</button>
const Stat = props => <div>{props.name} {props.value}</div>
const Stats = props => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <Header text="statistics"/>
      <table>
        <tbody>
          <tr><td><Stat name="good"/></td><td>{props.good}</td></tr>
          <tr><td><Stat name="bad"/></td><td>{props.bad}</td></tr>
          <tr><td><Stat name="neutral"/></td><td>{props.neutral}</td></tr>
          <tr><td><Stat name="all"/></td><td>{props.all}</td></tr>
          <tr><td><Stat name="average"/></td><td>{props.avg.toFixed(1)}</td></tr>
          <tr><td><Stat name="positive"/></td><td>{props.positive.toFixed(1) + "%"}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const all = good + bad + neutral
  const avg = (good + (-bad)) / all
  const positive = (good * 100) / all

  const setFeedback = (param) => {
    switch (param) {
      case "good":
        setGood(good + 1)
        break
      case "bad":
        setBad(bad + 1)
        break
      case "neutral":
        setNeutral(neutral + 1)
        break
    }
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={() => setFeedback("good")} text="good"/>
      <Button onClick={() => setFeedback("bad")} text="bad"/>
      <Button onClick={() => setFeedback("neutral")} text="neutral"/>
      <Stats good={good} bad={bad} neutral={neutral} all={all} avg={avg} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))