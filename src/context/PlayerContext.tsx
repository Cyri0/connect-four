import { createContext, useContext } from "react"


export type PlayerContextType = {
    actualPlayer: string,
    changePlayer: () =>  void
}
  
export const PlayerContext = createContext<PlayerContextType>({
    actualPlayer: 'player1',
    changePlayer: ()=>{},
})

export const usePlayerContext = () => useContext(PlayerContext)