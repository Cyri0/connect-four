import {useState, useEffect} from "react"
import HoverElement from "./HoverElement"

const GameField = () => {
  const [holes, setHoles] = useState<JSX.Element[]>([])
  const [hoverElement, setHoverElements] = useState<JSX.Element[]>([])
    useEffect(()=>{
        let newHoles = []
        let newHoverElements = []
        for(let row= 0; row < 7; row++){
            newHoverElements.push(<HoverElement key={row}/>)
            for(let column = 0; column<6; column++){
                newHoles.push(<div key={row + "|"+column} className="hole"></div>)
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