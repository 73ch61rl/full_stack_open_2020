import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>{props.text}</h1>;
const Button = props => <button onClick={props.onClick}>{props.text}</button>;
const Stats = props => {
  return (
    <div>
      <Stat name="good" value={props.good}/>
      <Stat name="bad" value={props.bad}/>
      <Stat name="neutral" value={props.neutral}/>
      <Stat name="all" value={props.all}/>
      <Stat name="average" value={props.avg}/>
      <Stat name="positive" value={props.positive}/>
    </div>
  );
};
const Stat = props => <div>{props.name} {props.value}</div>

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const all = good + bad + neutral;
  const avg = ((good * 1) + (bad * (-1)) + (neutral * 0)) / all
  const positive = (good * 100) / all

  const setFeedback = (param) => {
    switch (param) {
      case "good":
        setGood(good + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
    }
  };

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={() => setFeedback("good")} text="good"/>
      <Button onClick={() => setFeedback("bad")} text="bad"/>
      <Button onClick={() => setFeedback("neutral")} text="neutral"/>
      <Header text="statistics"/>
      <Stats good={good} bad={bad} neutral={neutral} all={all} avg={avg} positive={positive}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));