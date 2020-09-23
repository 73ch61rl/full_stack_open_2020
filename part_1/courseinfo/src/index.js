import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
);

const Content = (props) => (
  <div>
    <Part part={props.partName1} exercises={props.exNumber1}/>
    <Part part={props.partName2} exercises={props.exNumber2}/>
    <Part part={props.partName3} exercises={props.exNumber3}/>
  </div>
);

const Part = (props) => (
  <div>
    <p>{props.part} {props.exercises}</p>
  </div>
);

const Total = (props) => (
  <div>
    <p>Total number of exercises: {props.total}</p>
  </div>
);

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content 
        partName1={part1}
        exNumber1={exercises1}
        partName2={part2}
        exNumber2={exercises2}
        partName3={part3}
        exNumber3={exercises3}/>
      <Total total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))