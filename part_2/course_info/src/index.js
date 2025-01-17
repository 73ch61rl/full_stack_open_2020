import React from 'react'
import ReactDOM from 'react-dom'
import Course from "./components/Course"

const App = () => {
  const curriculum = "Web development curriculum"
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const listOfAllCourses = courses.map((course) => {
    return <Course key={course.id} course={course} />
  })

return <div><h1>{curriculum}</h1>{listOfAllCourses}</div>

}

ReactDOM.render(<App />, document.getElementById('root'))