import styles from '../GamesHeader.module.css'
const {gameInfo} = styles
type Props={
    date: Date;
    channel: string;
}
export function GameInfo({date, channel}: Props){
    return(
        <section className={gameInfo}>
            <p><span>UTC Schedule: </span>{new Date(date).toLocaleTimeString()}</p>
            <p><span>Channel: </span>{channel}</p>
        </section>
    )
}