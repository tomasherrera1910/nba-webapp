import type {Quarter} from '../../../utils/types'
import styles from '../GamesHeader.module.css'
const {quarterSection, quarterNumber, quarterWinner, quarterInfo} = styles
type Props = {
    quarters: Quarter[];
    home:string;
    away:string;
}
export function QuartersInfo({quarters, home, away}: Props){
    return(
        <section className={quarterSection}>
            <div className={quarterInfo}>
                <span>Q</span>    
                <span>{home}</span>    
                <span>{away}</span>    
            </div>
            {quarters.map(q => (
                <div key={q.Number}>
                    <span className={quarterNumber}>{q.Number > 4 ? "PR" : q.Number}</span>
                    <span className={q.HomeScore > q.AwayScore ? quarterWinner : ''}>{q.HomeScore}</span>
                    <span className={q.HomeScore < q.AwayScore ? quarterWinner : ''}>{q.AwayScore}</span>
                </div>
            ))}
        </section>
    )
}