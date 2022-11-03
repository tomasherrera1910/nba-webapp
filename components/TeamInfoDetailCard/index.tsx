import { CSSProperties } from "react";
import { type TeamInfoDetail } from "../../utils/types"
import styles from './TeamInfoDetailCard.module.css'
const {card, logoAndNameSection, teamNameSection, teamName, record , positionsSection} = styles
type Props = {
    teamInfo: TeamInfoDetail;
}
export function TeamInfoDetailCard({teamInfo}:Props){
    const cssVariables = {
        "--primary":`#${teamInfo.PrimaryColor}`,
        "--secondary": `#${teamInfo.SecondaryColor}`,
        "--primary-opacity":`#${teamInfo.PrimaryColor}60`,
        "--secondary-opacity":`#${teamInfo.SecondaryColor}40`,
    } as CSSProperties
    return(
        <section className={card} style={cssVariables}>
            <div className={logoAndNameSection}>
                <picture>
                    <img src={teamInfo.LogoURL} alt={`${teamInfo.Key} Logo`}/>
                </picture>
                <div className={teamNameSection}>
                    <h3 className={teamName}><span>{teamInfo.City}</span> {teamInfo.Name}</h3>
                    <span className={record}>{teamInfo.Wins} - {teamInfo.Losses}</span>
                </div>
            </div>
            <div className={positionsSection}>
                <h3>NBA <span>#{teamInfo.NBAPosition}</span></h3>
                <h3>{teamInfo.Conference} <span>#{teamInfo.ConferencePosition}</span></h3>
                <h3>{teamInfo.Division} <span>#{teamInfo.DivisionPosition}</span></h3>
            </div>
        </section>
    )
}