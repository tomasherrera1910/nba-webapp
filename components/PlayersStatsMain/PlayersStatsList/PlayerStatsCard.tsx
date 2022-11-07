import { PlayerStats, TeamInfo } from "../../../utils/types"
import styles from './PlayersStatsList.module.css'
const {playerCard, positionSpan} = styles
type Props = {
    player: PlayerStats
    filterStat: keyof PlayerStats
    teamInfo: TeamInfo
    position: number
}
export function PlayerStatsCard({player, filterStat, teamInfo, position}: Props){
    const cssVars = {
        "--primary": `#${teamInfo.PrimaryColor}`,
        "--secondary": `#${teamInfo.SecondaryColor}`
    } as React.CSSProperties
    return(
        <article className={playerCard} style={cssVars}>
            <div>
                <span className={positionSpan}>{position} &bull;</span>
                <picture>
                    <img src={teamInfo.LogoURL} alt={`${player.Team} logo`}/>
                </picture>
                <p>{player.Name}</p>
            </div>
            <span>{player[filterStat]}</span>
        </article>
    )
}