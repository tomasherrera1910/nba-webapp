import Link from 'next/link'
import { CSSProperties } from 'react'
import {type Team} from '../../utils/types'
import styles from './TeamCard.module.css'
const {card, teamName} = styles
type Props = {
    team: Team
}
export function TeamCard({team}: Props){
    const cardColors = {
        "--primary": `#${team.PrimaryColor}`,
        "--secondary": `#${team.SecondaryColor}`,
        "--tertiary": `#${team.TertiaryColor}`,
        "--logo": `url(${team.WikipediaLogoUrl})`
    } as CSSProperties
    return(
        <Link href={`/team/players/${team.Key}`}>
        <article className={card} style={cardColors}>
            <picture>
            <img src={team.WikipediaLogoUrl} alt={team.Key}/>
            </picture>
            <h3 className={teamName}><span>{team.City}</span> {team.Name}</h3>
        </article>
        </Link>
    )
}