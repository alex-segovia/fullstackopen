import { useState } from "react"
import Button from "./components/Button"
import Statistics from "./components/Statistics"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (category) => {
    if (category==='good'){
      setGood(good+1)
    } else if (category==='neutral'){
      setNeutral(neutral+1)
    } else if (category==='bad'){
      setBad(bad+1)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <span>
        <Button text={'good'} onClick={() => handleClick('good')} />
        <Button text={'neutral'} onClick={() => handleClick('neutral')} />
        <Button text={'bad'} onClick={() => handleClick('bad')} />
      </span>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
