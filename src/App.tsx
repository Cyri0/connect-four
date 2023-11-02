import { useEffect, useState } from 'react'
import GameField from './components/GameField'
import PlayerCard from './components/PlayerCard'
import { generateMatrix, GameFieldContext } from './context/GameFieldContext'
import { PlayerContext } from './context/PlayerContext'
import { GameOverContext } from './context/GameOverContext'
import { NewGameContext } from './context/NewGameContext'
import { winTest } from './calculations/winTest'
import GameOver from './components/GameOver'

export type Player = "player1" | "player2"

const App = () => {
  const [player1Point, setPlayer1Point] = useState<number>(0)
  const [player2Point, setPlayer2Point] = useState<number>(0)
  const [actualPlayer, setActualPlayer] = useState<Player>("player1")
  const [matrix, setGameFieldMatrix] = useState<number[][]>(generateMatrix())
  const [gameOver, setGameOver] = useState<boolean>(false)

  const changePlayer = () => {
    setActualPlayer(actualPlayer => actualPlayer == 'player1' ? 'player2' : 'player1')
  }

  const changeMatrix = (id: number, p: number) => {
    const newMatrix = [...matrix]
    newMatrix[id].push(p)
    setGameFieldMatrix(newMatrix)
  }

  const changeGameOver = () => {
    setGameOver(gameOver => !gameOver)
  }

  const startNewGame = () => {
    setGameFieldMatrix(generateMatrix())
    if(actualPlayer == 'player1')
    {
      setPlayer1Point(player1Point => player1Point + 1)
    }else{
      setPlayer2Point(player2Point => player2Point + 1)
    }
  }

  useEffect(() => {
    if (winTest(matrix)) {
      setGameOver(true)
    }
    else {
      changePlayer()
    }
  }, [matrix])

  return (
    <NewGameContext.Provider value={{startNewGame}}>
    <GameOverContext.Provider value={{changeGameOver}}>
    <GameFieldContext.Provider value={{ matrix, changeMatrix }}>
      <PlayerContext.Provider value={{ actualPlayer, changePlayer }}>
        <div id="main-app">
          {gameOver ? <GameOver /> :
          <>
          <PlayerCard smileyBg='player1' playerName='Player 1' point={player1Point} />
          <GameField />
          <PlayerCard smileyBg='player2' playerName='Player 2' point={player2Point} />
          </>
          }

        </div>
      </PlayerContext.Provider>
    </GameFieldContext.Provider>
    </GameOverContext.Provider>
    </NewGameContext.Provider>
  )
}

export default App