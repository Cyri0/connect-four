import {useState, useEffect} from 'react'

export interface CoinData{
    player?: string
}

const Coin = (props: CoinData) => {
  const [player, setPlayer] = useState<string>()

    useEffect(()=>{
        if(props.player)
            setPlayer(props.player)
    }, [props])
  return (
    <div className={`coin ${player}`}></div>
  )
}

export default Coin