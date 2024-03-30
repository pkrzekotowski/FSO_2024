import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}

const Counter = ({ counter, text }) => {
  return (
    <div>
      {text} {counter}
    </div>
  )
}

const PositivePercentage = ({ counter, text }) => {
  return (
    <div>
      {text} {counter} %
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const average = ((good * 1 - bad * -1 + neutral * 0)/ all) || 0
  const positive = ((good / all) * 100) || 0


  const handleGoodVote = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleBadVote = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const handleNeutralVote = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header text={'give feedback'}/>
      <Button onClick={handleGoodVote} text={'good'}/>
      <Button onClick={handleNeutralVote} text={'neutral'}/>
      <Button onClick={handleBadVote} text={'bad'}/>
      <Header text={'statistics'} />
      <Counter counter={good} text={'good'} />
      <Counter counter={neutral} text={'neutral'} />
      <Counter counter={bad} text={'bad'} />
      <Counter counter={all} text={'all'} />
      <Counter counter={average} text={'average'} />
      <PositivePercentage counter={positive} text={'positive'} />
    </div>
  )
}

export default App
