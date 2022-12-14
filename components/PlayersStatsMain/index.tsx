import { usePlayersStats } from "../../hooks/usePlayersStats"
import { PlayerStats, TeamInfo } from "../../utils/types"
import { PlayersStatsFilters } from "./PlayersStatsFilters"
import { PlayersStatsList } from "./PlayersStatsList"
import styles from './PlayersStatsMain.module.css'
const {container} = styles
type Props = {
    players: PlayerStats[]
    teamInfo: Record<string, TeamInfo>
}

export function PlayersStatsMain({players, teamInfo}: Props){
    const {matches, filter, searchPlayerName, setSearchPlayerName, handleFilterSelect, handleSearchSubmit} = usePlayersStats(players)
    return(
        <section className={container}>
            <PlayersStatsFilters 
                handleFilterSelect={handleFilterSelect} 
                handleSearchSubmit={handleSearchSubmit} 
                searchPlayerName={searchPlayerName} 
                setSearchPlayerName={setSearchPlayerName} 
                stat={filter.stat}/>
            {
            matches.length 
                ? <PlayersStatsList players={matches} filterStat={filter.stat} teamInfo={teamInfo}/>  
                : <PlayersStatsList players={players} filterStat={filter.stat} teamInfo={teamInfo}/>
            }
        </section>
    )
}