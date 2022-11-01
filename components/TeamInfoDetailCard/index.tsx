import { CSSProperties } from "react";
import { type TeamInfoDetail } from "../../utils/types"
import styles from './TeamInfoDetailCard.module.css'
const {card, teamName} = styles
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
            <h3 className={teamName}><span>{teamInfo.City}</span> {teamInfo.Name}</h3>
        </section>
    )
}