import { type Team } from "../../utils/types"
import { TeamCard } from "../TeamCard"
import styles from './TeamsGrid.module.css'
const {conferenceContainer, conferenceName} = styles
type Props = {
    teams: Team[];
    title: string
}

export default function ConferenceGrid({teams, title}: Props){
    return(
        <div className={conferenceContainer}>
                <h3 className={conferenceName}>{title} Conference</h3>
                {teams.map(team => (
                <TeamCard key={team.TeamID} team={team}/>
                ))}
            </div>
    )
}