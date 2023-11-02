import {useContext} from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { GameOverContext } from '../context/GameOverContext'
import { NewGameContext } from '../context/NewGameContext'

type GameOverType = {
    tie: boolean
}

const GameOver = (props: GameOverType) => {
  const player = useContext(PlayerContext)
  const gameOver = useContext(GameOverContext)
  const newGame = useContext(NewGameContext)

  const startNewGame = ()=> {
    gameOver.changeGameOver()
    newGame.startNewGame()
  }


  return (
    <div className={"gameOver " + player.actualPlayer} >
        
        {props.tie ?
        <>TIE!</> :
        <>{player.actualPlayer.toUpperCase()} WIN!</>
        }
        <button onClick={startNewGame}>New Game</button>
    </div>
  )
}

export default GameOver