import {useState, useEffect} from "react"
import Hole from "./Hole"
import HoverElement from "./HoverElement"

interface GameFieldData {
  actualPlayer: string
}


const GameField = (props: GameFieldData) => {
  const [holes, setHoles] = useState<JSX.Element[]>([])
  const [hoverElement, setHoverElements] = useState<JSX.Element[]>([])
    useEffect(()=>{
        let newHoles = []
        let newHoverElements = []
        for(let row= 0; row < 7; row++){
            newHoverElements.push(<HoverElement actualPlayer={props.actualPlayer}/>)
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