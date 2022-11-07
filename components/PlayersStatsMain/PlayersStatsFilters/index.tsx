import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlayerStats } from "../../../utils/types";
import styles from './PlayersStatsFilters.module.css'
const {filtersContainer, searchInputContainer, select} =  styles
type Props = {
    handleSearchSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
    handleFilterSelect: (evt: any) => void
    stat: keyof PlayerStats
    searchPlayerName: string
    setSearchPlayerName: React.Dispatch<React.SetStateAction<string>>
}
export function PlayersStatsFilters({handleSearchSubmit, handleFilterSelect, stat, searchPlayerName, setSearchPlayerName}: Props){
    return(
        <div className={filtersContainer}>
            <form onSubmit={handleSearchSubmit} className={searchInputContainer}>
                <input placeholder="Search by Player Name..." value={searchPlayerName} onChange={(evt) => setSearchPlayerName(evt.target.value)}/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </form>
            <select onChange={handleFilterSelect} value={stat} className={select}>
                <option value="Games">Games</option>
                <option value="PointsPerGame">Points</option>
                <option value="AssistsPerGame">Assists</option>
                <option value="ReboundsPerGame">Rebounds</option>
                <option value="StealsPerGame">Steals</option>
                <option value="BlockedShotsPerGame">Blocks</option>
                <option value="TurnoversPerGame">Turnovers</option>
                <option value="FieldGoalsPercentage">FG%</option>
                <option value="FreeThrowsPercentage">FT%</option>
                <option value="ThreePointersPercentage">3P%</option>
                <option value="DoubleDoubles">Double Doubles</option>
                <option value="TripleDoubles">Triple Doubles</option>
            </select>
        </div>
    )
}