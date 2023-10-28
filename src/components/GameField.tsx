import {useState, useEffect} from "react"
import Hole from "./Hole"

const GameField = () => {
  const [holes, setHoles] = useState<JSX.Element[]>([])
  const [hoverElement, setHoverElements] = useState<JSX.Element[]>([])
    useEffect(()=>{
        let newHoles = []
        let newHoverElements = []
        for(let row= 0; row < 7; row++){
            newHoverElements.push(<div><div className="marker"></div></div>)
            for(let column = 0; column<6; column++){
                newHoles.push(<Hole player={ undefined } key={`${row}|${column}`}/>)
            }
        }
        setHoles(newHoles)
        setHoverElements(newHoverElements)
    }, [])

  return (
    <div>
        <div className="hover-area">
            {hoverElement}
        </div>
        <div className="game-field">
            {holes}
        </div>
    </div>
  )
}

export default GameField