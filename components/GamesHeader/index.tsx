import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, Pagination, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import type {Game, TeamInfo} from '../../utils/types'
import { GameCard } from './GameCard';
import styles from './GamesHeader.module.css'
const {gamesHeaderStyle, spanScrambledInfo} = styles

type Props = {
    yesterday: Game[];
    today: Game[];
    tomorrow: Game[]; 
    teamsObject: Record<string, TeamInfo>;
}

export function GamesHeader({yesterday, today, tomorrow, teamsObject}: Props){
    const getDay = (index:number):string => {
        return index >= yesterday.length + today.length ? 'Tomorrow'
                : index >= yesterday.length ? 'Today'
                : 'Yesterday'
    }
    return(
        <header className={gamesHeaderStyle}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={'auto'}
                navigation
                scrollbar={{ draggable: true }}
                style={{height: 'fit-content', display:'flex', width:'100%', paddingBottom: 8}}
            >
                {[...yesterday, ...today, ...tomorrow].map((game, i) => (
                    <SwiperSlide key={game.GameID} style={{width:'fit-content'}}>
                        <GameCard game={game} teamsObject={teamsObject} day={getDay(i)}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <small className={spanScrambledInfo}>*The scores are randomly adjusted up or down between 5% and 20% from the actual value.</small>
        </header>
    )

}