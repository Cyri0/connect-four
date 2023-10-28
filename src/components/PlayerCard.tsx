interface PlayerData {
    smileyBg: string,
    playerName: string,
    point: number
}

const PlayerCard = (props: PlayerData) => {
  return (
    <div className={"player-card"}>
        <div className={"smiley "  + props.smileyBg}></div>
        <h2>{props.playerName}</h2>
        <h1>{props.point}</h1>
    </div>
  )
}

export default PlayerCard