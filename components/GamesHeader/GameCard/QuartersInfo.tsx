import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import type {Quarter} from '../../../utils/types'
import styles from '../GamesHeader.module.css'
import { toggle } from '../../../utils/toggle';
const {quarterSection, quarterNumber, quarterWinner, quarterInfo, toggleQuarter, showQuarters} = styles
type Props = {
    quarters: Quarter[];
    home:string;
    away:string;
    gameID: number;
}
export function QuartersInfo({quarters, home, away, gameID}: Props){
    const [quarterToggle, setQuarterToggle] = useState(false)
    const handleToggle = () => {
        setQuarterToggle(prevState => !prevState)
        toggle(`quarters-${gameID}`, showQuarters)
    }
    return(
        <>
        {
        quarterToggle ? <button className={toggleQuarter} onClick={handleToggle}>Less <FontAwesomeIcon icon={faAngleUp}/></button>
                      : <button className={toggleQuarter} onClick={handleToggle}>More <FontAwesomeIcon icon={faAngleDown}/></button>
        }
        <section className={quarterSection} id={`quarters-${gameID}`}>
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
        </>
    )
}