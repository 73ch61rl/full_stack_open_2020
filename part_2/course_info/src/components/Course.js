import React from 'react'

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <p>
            {part} <strong>{exercises}</strong>
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises} />
            )}
        </div>
    )
}

const Total = ({ parts }) => {
    const sumOfAllExercises = parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <p>Total number of exercises: <strong>{sumOfAllExercises}</strong></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course