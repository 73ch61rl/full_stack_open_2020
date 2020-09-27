import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => <button onClick={props.onClick}>{props.text}</button>

const App = props => {
  const [selected, setSelected] = useState(0)
  const arrayOfAnecdotesWithZeros = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(arrayOfAnecdotesWithZeros)

  const showNextAnecdote = () => {
    const randomAnecdoteFromArray = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randomAnecdoteFromArray)
  }

  const voteForAnecdote = () => {
    const newArrayOfAnecdotes = [...votes];
    newArrayOfAnecdotes[selected] = newArrayOfAnecdotes[selected] + 1;
    setVotes(newArrayOfAnecdotes);
    //console.log(newArrayOfAnecdotes)
    //console.log(newArrayOfAnecdotes.length)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} vote/s</p>
      <Button onClick={() => voteForAnecdote("vote")} text="vote"/>
      <Button onClick={() => showNextAnecdote("next")} text="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)