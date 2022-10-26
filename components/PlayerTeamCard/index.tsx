import { type Player } from "../../utils/types";
import styles from './PlayerTeamCard.module.css'
const {cardPlayer, cardInfo, jerseyNumber, statsPlayer} = styles
type Props = {
    player: Player
}
export function PlayerTeamCard({player}: Props){
    console.log({player})
    return(
        <article className={cardPlayer}>
            <picture>
                <img src={player.PhotoUrl} alt={player.FirstName + player.LastName}/>
            </picture>
            <section className={cardInfo}>
                <h3>{player.FirstName} {player.LastName} <span>{player.Position}</span></h3>  
                <span className={jerseyNumber}>#{player.Jersey}</span>
            </section>
            <section className={statsPlayer}>
                <section>
                    <div>
                        <h4>PPG</h4>
                        <p>{player.PointsPerGame}</p>
                    </div>
                    <div>
                        <h4>APG</h4>
                        <p>{player.AssistsPerGame}</p>
                    </div>
                    <div>
                        <h4>RPG</h4>
                        <p>{player.ReboundsPerGame}</p>
                    </div>
                </section>
                <section>
                    <div>
                        <h4>FG%</h4>
                        <p>{player.FieldGoalsPercentage}</p>
                    </div>
                    <div>
                        <h4>3P%</h4>
                        <p>{player.ThreePointsPercentage}</p>
                    </div>
                    <div>
                        <h4>FT%</h4>
                        <p>{player.FreeThrowPercentage}</p>
                    </div>
                </section>    
            </section>  
        </article>
    )
}