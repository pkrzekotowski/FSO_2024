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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodVote = () => setGood(good + 1)
  const handleNeutralVote = () => setNeutral(neutral + 1)
  const handleBadVote = () => setBad(bad + 1)

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
    </div>
  )
}

export default App
