import type { TeamInfo,  Game } from "../../../utils/types";
type Props = {
    team: Game['HomeTeam'] | Game['AwayTeam'];
    teamScore: Game['HomeTeamScore'] | Game['AwayTeamScore'];
    teamInfo: TeamInfo;
}
export function TeamGameCard({team, teamScore, teamInfo}: Props){
    return(
        <div>
            <picture>
                <img src={teamInfo.LogoURL} alt={`${team} Logo`}/>
            </picture>
            <h3>{team}</h3>
            <span>({teamInfo.Wins}-{teamInfo.Losses})</span>
            <span>{teamScore || ''}</span>
        </div>
    )
}