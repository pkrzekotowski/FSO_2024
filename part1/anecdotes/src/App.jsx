import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}

const Votes = ({ votes }) => {
  return (
    <div>
      has {votes} votes
    </div>
  )
}

const Header = ({ text }) => {
  return (
    <>
     <h2>{text}</h2>
    </>
  )
}

const Anecdotes = ({ anecdotes }) => {
  return (
    <>
     {anecdotes}
    </>
  )
}

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

  const arrayLength = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(arrayLength).fill(0))

  const getRandomNuber = () => Math.floor(Math.random() * arrayLength)
  const handleClick = () => setSelected(getRandomNuber)
  const handleVote = () => {
    setVotes (() => {
      const updatedVotes = [...votes]
      updatedVotes[selected] += 1
      return updatedVotes
     })
  }

  const highestVoteIndex = votes.reduce((highestIndex, vote, currentIndex) => {
    if (vote >= votes[highestIndex]) {
      return currentIndex;
    }
    return highestIndex;
  }, 0);

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      <Anecdotes anecdotes={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button onClick={handleVote} text={'vote'} />
      <Button onClick={handleClick} text={'next anecdote'} />
      <Header text={'Anecdote with the most votes'} />
      <Anecdotes anecdotes={anecdotes[highestVoteIndex]} />
    </div>
  )
}

export default App
