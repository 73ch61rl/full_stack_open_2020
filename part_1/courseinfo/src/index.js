import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => (
  <div>
    <h1>{props.course}</h1>
  </div>
);

const Content = props => (
  <div>
    <Part part={props.partName1} exercises={props.exNumber1}/>
    <Part part={props.partName2} exercises={props.exNumber2}/>
    <Part part={props.partName3} exercises={props.exNumber3}/>
  </div>
);

const Part = props => (
  <div>
    <p>{props.part} {props.exercises}</p>
  </div>
);

const Total = props => (
    <p>
      Total number of excercises: {props.number1 + props.number2 + props.number3}
    </p>
 );

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
        partName1={part1.name}
        exNumber1={part1.exercises}
        partName2={part2.name}
        exNumber2={part2.exercises}
        partName3={part3.name}
        exNumber3={part3.exercises}/>
      <Total number1={part1.exercises} number2={part2.exercises} number3={part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))