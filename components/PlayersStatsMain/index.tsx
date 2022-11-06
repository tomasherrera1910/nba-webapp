import { usePlayersStats } from "../../hooks/usePlayersStats"
import { PlayerStats, TeamInfo } from "../../utils/types"
import { PlayersStatsFilters } from "./PlayersStatsFilters"
import { PlayersStatsList } from "./PlayersStatsList"

type Props = {
    players: PlayerStats[]
    teamInfo: Record<string, TeamInfo>
}

export function PlayersStatsMain({players, teamInfo}: Props){
    const {matches, filter, searchPlayerName, setSearchPlayerName, handleFilterSelect, handleSearchSubmit} = usePlayersStats(players)
    return(
        <section>
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