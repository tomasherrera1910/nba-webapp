import { type Game } from "../../../utils/types";
type Props = {
    team: Game['HomeTeam'] | Game['AwayTeam'];
    teamScore: Game['HomeTeamScore'] | Game['AwayTeamScore'];
    logoURL: string
}
export function TeamGameCard({team, teamScore, logoURL}: Props){
    return(
        <div>
            <picture>
                <img src={logoURL} alt={`${team} Logo`}/>
            </picture>
            <h3>{team}</h3>
            <span>{teamScore || '0'}</span>
        </div>
    )
}