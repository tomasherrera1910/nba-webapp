import type {Game, TeamInfo} from '../../../utils/types'
import styles from '../GamesHeader.module.css'
import { GameInfo } from './GameInfo';
import { QuartersInfo } from './QuartersInfo';
import { TeamGameCard } from './TeamGameCard';
const {cardGame, teamAndScoreSection} = styles
type Props = {
    game: Game; 
    teamsObject: Record<string, TeamInfo>;
    day: string
}

export function GameCard({game, teamsObject, day}: Props){
    
    return(
        <article key={game.GameID} className={cardGame}>
            <GameInfo date={game.DateTimeUTC} channel={game.Channel} day={day} status={game.Status}/> 
            <section className={teamAndScoreSection}>
                <TeamGameCard team={game.HomeTeam} teamScore={game.HomeTeamScore} teamInfo={teamsObject[game.HomeTeam]}/>
                <TeamGameCard team={game.AwayTeam} teamScore={game.AwayTeamScore} teamInfo={teamsObject[game.AwayTeam]}/>
            </section>
            {game.Status !== 'Scheduled' &&
                <QuartersInfo quarters={game.Quarters} home={game.HomeTeam} away={game.AwayTeam} gameID={game.GameID}/>
            }
        </article>
    )
}