import { createContext, useContext } from "react"


export type NewGameContextType = {
    startNewGame: () =>  void
}

export const NewGameContext = createContext<NewGameContextType>({
    startNewGame: ()=>{},
})

export const usePlayerContext = () => useContext(NewGameContext)