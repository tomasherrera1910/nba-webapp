import {type Team} from '../../utils/types'
import styles from './TeamCard.module.css'
const {card} = styles
type Props = {
    team: Team
}
export function TeamCard({team}: Props){
    return(
        <article className={card}>
            <picture>
            <img src={team.WikipediaLogoUrl} alt={team.Key}/>
            </picture>
            <h3>{team.City} {team.Name}</h3>
        </article>
    )
}