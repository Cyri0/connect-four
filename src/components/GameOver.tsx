import {useContext} from 'react'
import { PlayerContext } from '../context/PlayerContext'


const GameOver = () => {
    const player = useContext(PlayerContext)

  return (
    <div className={"gameOver " + player.actualPlayer} >{player.actualPlayer} WIN!</div>
  )
}

export default GameOver