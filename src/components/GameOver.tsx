import {useContext} from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { GameOverContext } from '../context/GameOverContext'
import { NewGameContext } from '../context/NewGameContext'


const GameOver = () => {
  const player = useContext(PlayerContext)
  const gameOver = useContext(GameOverContext)
  const newGame = useContext(NewGameContext)

  const startNewGame = ()=> {
    gameOver.changeGameOver()
    newGame.startNewGame()
  }


  return (
    <div className={"gameOver " + player.actualPlayer} >
        {player.actualPlayer.toUpperCase()} WIN!
        <button onClick={startNewGame}>New Game</button>
    </div>
  )
}

export default GameOver