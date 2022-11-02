import { CSSProperties } from "react";
import { type TeamInfoDetail } from "../../utils/types"
import styles from './TeamInfoDetailCard.module.css'
const {card, teamNameSection, teamName, record , positionsSection} = styles
type Props = {
    teamInfo: TeamInfoDetail;
}
export function TeamInfoDetailCard({teamInfo}:Props){
    const cssVariables = {
        "--primary":`#${teamInfo.PrimaryColor}`,
        "--secondary": `#${teamInfo.SecondaryColor}`
    } as CSSProperties
    return(
        <section className={card} style={cssVariables}>
            <picture>
                <img src={teamInfo.LogoURL} alt={`${teamInfo.Key} Logo`}/>
            </picture>
            <div className={teamNameSection}>
                <h3 className={teamName}><span>{teamInfo.City}</span> {teamInfo.Name}</h3>
                <span className={record}>{teamInfo.Wins} - {teamInfo.Losses}</span>
            </div>
            <div className={positionsSection}>
                <h3>NBA <span>#{teamInfo.NBAPosition}</span></h3>
                <h3>{teamInfo.Conference} Conference <span>#{teamInfo.ConferencePosition}</span></h3>
                <h3>{teamInfo.Division} Division <span>#{teamInfo.DivisionPosition}</span></h3>
            </div>
        </section>
    )
}