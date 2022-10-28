import type {Game} from '../../utils/types'
import styles from './GamesHeader.module.css'
const {gamesHeaderStyle, cardGame, teamAndScoreSection, quarterSection, quarterNumber} = styles
type Props = {
    yesterday: Game[];
    today: Game[];
    tomorrow: Game[]; 
}

export function GamesHeader({yesterday, today, tomorrow}: Props){
    return(
        <header className={gamesHeaderStyle}>
            {yesterday.length && yesterday.map(game => (
                <article key={game.GameID} className={cardGame}>
                    <section className={teamAndScoreSection}>
                        <div>
                            <h3>{game.HomeTeam}</h3>
                            <span>{game.HomeTeamScore}</span>
                        </div>
                        <div>
                            <h3>{game.AwayTeam}</h3>
                            <span>{game.AwayTeamScore}</span>
                        </div>
                    </section>
                    <section className={quarterSection}>
                        {game.Quarters.map(q => (
                            <div key={q.Number}>
                                <span className={quarterNumber}>{q.Number > 4 ? "PR" : q.Number}</span>
                                <span>{q.HomeScore}</span>
                                <span>{q.AwayScore}</span>
                            </div>
                        ))}
                    </section>
                </article>
            ))}
        </header>
    )

}