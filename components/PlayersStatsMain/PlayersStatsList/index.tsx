import { PlayerStats, TeamInfo } from "../../../utils/types"
import { PlayerStatsCard } from "./PlayerStatsCard"

type Props = {
    players: PlayerStats[]
    filterStat: keyof PlayerStats
    teamInfo: Record<string, TeamInfo>
}

export function PlayersStatsList({players, filterStat, teamInfo}: Props){
    return(
        <div>
            { players.map(player => (
                <PlayerStatsCard key={player.PlayerID} player={player} teamInfo={teamInfo[player.Team]} filterStat={filterStat}/>
            ))}
        </div>
    )
}