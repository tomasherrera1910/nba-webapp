import { useState } from "react"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type Team } from "../../utils/types"
import { TeamCard } from "../TeamCard"
import styles from './TeamsGrid.module.css'
import { toggle } from "../../utils/toggle"
const {conferenceWithTitleContainer, conferenceContainer, conferenceName, toggleButton, hiddenConference, titleConferenceDisabled} = styles
type Props = {
    teams: Team[];
    title: string
}
export default function ConferenceGrid({teams, title}: Props){
    const [conferenceVisible, setConferenceVisible] = useState(true)
    const toggleConference = () => {
        setConferenceVisible(prevState => !prevState)
        toggle(`${title}-conference`, hiddenConference)
        toggle(`${title}-title`, titleConferenceDisabled)
    } 
    return(
        <section className={conferenceWithTitleContainer}>
            <h3 className={conferenceName} id={`${title}-title`}>{title} Conference 
                <button onClick={toggleConference} className={toggleButton}>
                    <FontAwesomeIcon icon={conferenceVisible ? faAngleUp : faAngleDown}/>
                </button>
            </h3>
            <div className={conferenceContainer} id={`${title}-conference`}>
                {teams.map((team, i) => (
                <TeamCard key={team.TeamID} team={team} position={(i+1)}/>
                ))}
            </div>
        </section>    
    )
}