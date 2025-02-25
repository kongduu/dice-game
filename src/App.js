import { useState } from "react";
import { Board } from "./Board";
import { Button } from "./Button.js";

const random = n => Math.ceil(Math.random() * n)

function App() {
  const [myGameHistory, setMyGameHistory] = useState([])
  const [yourGameHistory, setYourGameHistory] = useState([])

  const handleClick = () => {
    const nextMyNum = random(6)
    setMyGameHistory([...myGameHistory, nextMyNum])

    const nextYourNum = random(6)
    setYourGameHistory([...yourGameHistory, nextYourNum])
  }

  const handleReset = () => {
    setMyGameHistory([])
    setYourGameHistory([])
  }

  return (
    <div>
      <Board
        color="blue"
        num={myGameHistory.at(-1)}
        gameHistory={myGameHistory}
      />
      <Board
        color="red"
        num={yourGameHistory.at(-1)}
        gameHistory={yourGameHistory}
      />
      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleReset}>처음부터</Button>
    </div>
  )
}

export default App;
