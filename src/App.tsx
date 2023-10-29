import { useEffect, useState} from 'react'
import GameField from './components/GameField'
import PlayerCard from './components/PlayerCard'

import { PlayerContext } from './context/PlayerContext'

export type Player = "player1" | "player2"


const App = () => {
  const [player1Point, setPlayer1Point] = useState(0)
  const [player2Point, setPlayer2Point] = useState(0)
  const [actualPlayer, setActualPlayer] = useState<Player>("player1")


  const changePlayer = ()=>{
    setActualPlayer(actualPlayer => actualPlayer == 'player1' ? 'player2' : 'player1')
  }

  useEffect(() => {
    console.log('player changed to ' + actualPlayer)
  }, [actualPlayer])

  return (
    <PlayerContext.Provider value={{actualPlayer, changePlayer}}>
      <div id="main-app">
        <PlayerCard smileyBg='player1' playerName='Player 1' point={player1Point} />

        <GameField />

        <PlayerCard smileyBg='player2' playerName='Player 2' point={player2Point} />
      </div>
    </PlayerContext.Provider>
  )
}

export default App