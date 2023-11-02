import { createContext, useContext } from "react"


export type GameOverContextType = {
    changeGameOver: () =>  void
}
  
export const GameOverContext = createContext<GameOverContextType>({
    changeGameOver: ()=>{},
})

export const useGameOverContext = () => useContext(GameOverContext)