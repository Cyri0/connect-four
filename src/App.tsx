import {useState} from 'react'
import GameField from './components/GameField'
import PlayerCard from './components/PlayerCard'

const App = () => {
  const [player1Point, setPlayer1Point] = useState(0)
  const [player2Point, setPlayer2Point] = useState(0)
  const [actualPlayer, setActualPlayer] = useState<string>("player1")

  return (
    <div id="main-app">
      <PlayerCard smileyBg='player1' playerName='Player 1' point={player1Point}/>
      <GameField actualPlayer={actualPlayer}/>
      <PlayerCard smileyBg='player2' playerName='Player 2' point={player2Point}/>
    </div>
  )
}

export default App