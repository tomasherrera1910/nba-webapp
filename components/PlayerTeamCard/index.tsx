import { type Player } from "../../utils/types";
import styles from './PlayerTeamCard.module.css'
const {cardPlayer} = styles
type Props = {
    player: Player
}
export function PlayerTeamCard({player}: Props){
    return(
        <article className={cardPlayer}>
            <picture>
                <img src={player.PhotoUrl} alt={player.FirstName + player.LastName}/>
            </picture>
            <section>
                <h3>{player.FirstName} {player.LastName}</h3>  
                <p>{player.Position}</p>
                <span>#{player.Jersey}</span>
            </section>  
        </article>
    )
}