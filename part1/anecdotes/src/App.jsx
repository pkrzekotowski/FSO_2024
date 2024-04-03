import { useState } from 'react'

const Header = ({ text }) => (
  <h2>{text}</h2>
)

const Anecdote = ({ anecdote }) => (
  <div>{anecdote}</div>
)

const Votes = ({ votes }) => (
  <div>has {votes} votes</div>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))

  const arrayLength = anecdotes.length
  const highestVoteAnecdote = Math.max(...votes)
  const highestIndex = votes.indexOf(highestVoteAnecdote)

  const handleClick = () => setSelected(Math.floor(Math.random() * arrayLength))
  const handleVote = () => setVotes(votes.map((value, index) => index === selected ? value + 1 : value))

  return (
    <div>
      <Header text='anecdote of the day' />
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleClick} text='next anecdote' />
      <Header text='anecdote with the most votes' />
      <Anecdote anecdote= {anecdotes[highestIndex]} />
      <Votes votes={votes[highestIndex]} />
    </div>
  )
}

export default App
