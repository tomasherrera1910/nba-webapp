import { PlayerStats, TeamInfo } from "../../../utils/types"
import { PlayerStatsCard } from "./PlayerStatsCard"
import styles from './PlayersStatsList.module.css'
import { useEffect, useState } from "react"
const {container, moreButton} = styles
type Props = {
    players: PlayerStats[]
    filterStat: keyof PlayerStats
    teamInfo: Record<string, TeamInfo>
}
const FILTER_TITLE:Record<keyof PlayerStats, string> = {
    Games: 'Games',
    PointsPerGame: 'Points',
    AssistsPerGame: 'Assists',
    ReboundsPerGame: 'Rebounds',
    StealsPerGame: 'Steals',
    BlockedShotsPerGame: 'Blocks',
    TurnoversPerGame: 'Turnovers',
    FieldGoalsPercentage: 'Field Goals %',
    FreeThrowsPercentage: 'Free Throws %',
    ThreePointersPercentage: 'Three Points %',
    DoubleDoubles: 'Double Doubles',
    TripleDoubles: 'Triple Doubles',
    Name:'', PlayerID:'', Position:'', Team:''
}
export function PlayersStatsList({players, filterStat, teamInfo}: Props){
    const [results, setResults] = useState<number>(20)
    const handleResults = () => {
        setResults(prevResults => prevResults + 20)
    }
    useEffect(() => {
        setResults(20)
    },[players])
    return(
        <div className={container}>
            <h3>{FILTER_TITLE[filterStat]} <span>({players.length} results)</span></h3>
            { players.slice(0,results).map((player, i) => (
                <PlayerStatsCard key={player.PlayerID} player={player} teamInfo={teamInfo[player.Team]} filterStat={filterStat} position={(i+1)}/>
            ))}
            {results < players.length &&
            <button onClick={handleResults} className={moreButton}>More...</button>}
        </div>
    )
}