import {useState, useEffect} from 'react'
import Coin from './Coin'

interface HoleData {
    player?: string
}

const Hole = (props: HoleData) => {
  const [coin, setCoin] = useState<JSX.Element>()

  useEffect(()=>{
    if(props.player)
        setCoin(<Coin player={props.player} />)
  }, [props])

  return (
  <div className="hole">
    { coin }
  </div>
  )
}

export default Hole