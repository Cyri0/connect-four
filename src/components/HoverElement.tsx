import { useState, useContext } from 'react'
import Coin from './Coin'

import { PlayerContext } from '../context/PlayerContext'
import { GameFieldContext } from '../context/GameFieldContext'

interface HoverElementProps {
    id: number
}

const HoverElement = (props: HoverElementProps) => {

    const ctx = useContext(PlayerContext)

    const gfCtx = useContext(GameFieldContext)

    const [visibility, setVisibility] = useState(false)
    const [coins, setCoins] = useState<JSX.Element[]>([])

    const createCoin = () => {
        if (coins.length < 6){
            setCoins([<Coin key={coins.length + 1} player={ctx.actualPlayer}/>, ...coins])

            gfCtx.changeMatrix(props.id, ctx.actualPlayer == 'player1'? 1 : 2)


            ctx.changePlayer()
        }
    }

    return (
        <div>
            <div
                onMouseEnter={() => setVisibility(true)}
                onMouseLeave={() => { setVisibility(false) }}
                onClick={() => createCoin()}
                className='hover-field'
            >
            <div className={"marker " + ctx.actualPlayer} style={{ display: visibility ? "block" : "none" }}></div>
            </div>
            <div className='coin-holder'>
                {coins}
            </div>
        </div>
    )
}

export default HoverElement