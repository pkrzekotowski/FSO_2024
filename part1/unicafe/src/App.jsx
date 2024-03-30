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

const StatisticLine = ({ counter, text }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{counter}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
      <p>no feedback given</p>
      </div>
    )
  }

  return (
    <div>
        <table>
          <tbody>
            <StatisticLine counter={props.neutral} text={'neutral'} />
            <StatisticLine counter={props.bad} text={'bad'} />
            <StatisticLine counter={props.all} text={'all'} />
            <StatisticLine counter={props.average} text={'average'} />
            <StatisticLine counter={props.positive} text={'positive'} />
        </tbody>
        </table>
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
  const positive = ((good / all) * 100) + ' %' || 0


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
      <Statistics
      bad={bad}
      good={good}
      neutral={neutral}
      all={all}
      average={average}
      positive={positive}
      />
    </div>
  )
}

export default App
