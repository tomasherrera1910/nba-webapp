import type {Game, TeamInfo} from '../../utils/types'
import { GameCard } from './GameCard';
import styles from './GamesHeader.module.css'
const {gamesHeaderStyle} = styles
type Props = {
    yesterday: Game[];
    today: Game[];
    tomorrow: Game[]; 
    teamsObject: Record<string, TeamInfo>;
}

export function GamesHeader({yesterday, today, tomorrow, teamsObject}: Props){
    return(
        <header className={gamesHeaderStyle}>
            {yesterday.map(game => (
                <GameCard game={game} teamsObject={teamsObject} key={game.GameID} day={'Yesterday'}/>
            ))}
            {today.map(game => (
                <GameCard game={game} teamsObject={teamsObject} key={game.GameID} day={'Today'}/>
            ))}
            {tomorrow.map(game => (
                <GameCard game={game} teamsObject={teamsObject} key={game.GameID} day={'Tomorrow'}/>
            ))}
        </header>
    )

}