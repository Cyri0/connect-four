import { createContext, useContext } from "react"

export const generateMatrix = () =>{
    let matrix :number[][] = []
    for(let rowN = 0; rowN < 7; rowN++){
        const row : number[] = []
        // for(let columnN = 0; columnN < 7; columnN++){
        //     row.push(0)
        // }
        matrix.push(row)
    }
    return matrix
}

export type GameFieldContextType = {
    matrix: number[][],
    changeMatrix: (id: number, p: number)=>void
}

export const GameFieldContext = createContext<GameFieldContextType>({
    matrix: generateMatrix(),
    changeMatrix: ()=>{}
})

export const useGameFieldContext = () => useContext(GameFieldContext)