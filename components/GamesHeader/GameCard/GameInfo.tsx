import styles from '../GamesHeader.module.css'
const {gameInfo, gameNow, gameFinished} = styles
type Props={
    date: Date;
    channel: string;
    day: string;
    status: string;
}
export function GameInfo({date, channel, day, status}: Props){
    const dateFormat = new Date(date)
    const hour = dateFormat.getHours() ? dateFormat.getHours() : '00'
    const minutes = dateFormat.getMinutes() ? dateFormat.getMinutes() : '00' 
    const gameStatus = (status === 'F/OT' || status ==='Final') 
                        ? status 
                        : status === 'InProgress' ? 'Now' 
                        : `${hour}:${minutes}`
    const gameStatusColor = (gameStatus === 'F/OT' || gameStatus ==='Final') 
                            ? gameFinished 
                            : gameStatus === 'Now' ? gameNow
                            : ''
    return(
        <section className={gameInfo}>
            <span>{day} - <span className={gameStatusColor}>{gameStatus}</span></span>
            <p><span>Channel: </span>{channel}</p>
        </section>
    )
}