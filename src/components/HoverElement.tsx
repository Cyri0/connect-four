import {useState} from 'react'

interface HoverElementData {
    actualPlayer: string
}

const HoverElement = (props: HoverElementData) => {

    const [visibility, setVisibility] = useState(false)

    return (
        <div 
            onMouseEnter={()=>setVisibility(true)}
            onMouseLeave={()=>{setVisibility(false)}}
        >
            <div className={"marker " + props.actualPlayer} style={{display: visibility ? "block": "none"}}></div>
        </div>
    )
}

export default HoverElement