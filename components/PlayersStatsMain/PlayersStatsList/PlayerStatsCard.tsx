import { PlayerStats, TeamInfo } from "../../../utils/types"

type Props = {
    player: PlayerStats
    filterStat: keyof PlayerStats
    teamInfo: TeamInfo
}
export function PlayerStatsCard({player, filterStat, teamInfo}: Props){
    return(
        <article>
            <p>{player.Name} - from card - {filterStat} - {player[filterStat]}</p>
            <picture>
                <img src={teamInfo.LogoURL} alt={`${player.Team} logo`} height={25}/>
            </picture>
        </article>
    )
}