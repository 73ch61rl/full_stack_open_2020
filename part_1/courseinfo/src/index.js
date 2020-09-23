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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content 
        partName1={parts[0].name}
        exNumber1={parts[0].exercises}
        partName2={parts[1].name}
        exNumber2={parts[1].exercises}
        partName3={parts[2].name}
        exNumber3={parts[2].exercises}/>
      <Total number1={parts[0].exercises} number2={parts[1].exercises} number3={parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))