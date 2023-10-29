import { useState, useContext } from 'react'
import Coin from './Coin'

import { PlayerContext } from '../context/PlayerContext'

const HoverElement = () => {

    const ctx = useContext(PlayerContext)

    const [visibility, setVisibility] = useState(false)

    const [coins, setCoins] = useState<JSX.Element[]>([])

    const createCoin = () => {
        if (coins.length < 6){
            setCoins([<Coin key={coins.length + 1} player={ctx.actualPlayer}/>, ...coins])
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