import type {Game, TeamInfo} from '../../../utils/types'
import styles from '../GamesHeader.module.css'
import { GameInfo } from './GameInfo';
import { QuartersInfo } from './QuartersInfo';
import { TeamGameCard } from './TeamGameCard';
const {cardGame, teamAndScoreSection} = styles
type Props = {
    game: Game; 
    teamsObject: Record<string, TeamInfo>;
}

export function GameCard({game, teamsObject}: Props){
    return(
        <article key={game.GameID} className={cardGame}>
        <section className={teamAndScoreSection}>
            <TeamGameCard team={game.HomeTeam} teamScore={game.HomeTeamScore} logoURL={teamsObject[game.HomeTeam].LogoURL} />
            <TeamGameCard team={game.AwayTeam} teamScore={game.AwayTeamScore} logoURL={teamsObject[game.AwayTeam].LogoURL} />
        </section>
        <QuartersInfo quarters={game.Quarters} home={game.HomeTeam} away={game.AwayTeam}/>
        <GameInfo date={game.DateTimeUTC} channel={game.Channel}/>
    </article>
    )
}