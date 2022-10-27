import Link from 'next/link'
import { CSSProperties } from 'react'
import {type Team} from '../../utils/types'
import { TeamsGrid } from '../TeamsGrid'
import styles from './TeamCard.module.css'
const {card, teamPosition, teamName, teamRecord} = styles
type Props = {
    team: Team;
    position: number;
}
export function TeamCard({team, position}: Props){
    const cardColors = {
        "--primary": `#${team.PrimaryColor}`,
        "--secondary": `#${team.SecondaryColor}`,
        "--tertiary": `#${team.TertiaryColor}`,
        "--logo": `url(${team.WikipediaLogoUrl})`
    } as CSSProperties
    return(
        <Link href={`/team/${team.Key}`}>
        <article className={card} style={cardColors}>
            <section className={teamPosition}>
                <span>{position}</span>
            </section>
            <picture>
            <img src={team.WikipediaLogoUrl} alt={team.Key}/>
            </picture>
            <h3 className={teamName}><span>{team.City}</span> {team.Name}</h3>
            <p className={teamRecord}>{team.Wins} - {team.Losses}</p>
        </article>
        </Link>
    )
}