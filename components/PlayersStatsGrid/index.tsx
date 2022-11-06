import React, { useMemo, useState } from "react"
import { PlayerStats, TeamInfo } from "../../utils/types"

type Props = {
    players: PlayerStats[]
    teamInfo: Record<string, TeamInfo>
}
type Filter = {
    name: string;
    stat: keyof PlayerStats
}
const INITIAL_FILTER:Filter = {
    name: "",
    stat: "Games"
}
export function PlayersStatsGrid({players, teamInfo}: Props){
    const [filter, setFilter] = useState<Filter>(INITIAL_FILTER)
    const [searchPlayerName, setSearchPlayerName] = useState<string>("")
    const matches = useMemo<PlayerStats[]>(() => {
        return players
                .filter(player => player.Name.toLowerCase().includes(filter.name.trim().toLowerCase()))
                .sort((a, b) => Number(b[filter.stat]) - Number(a[filter.stat])) || []
    },[filter, players]) 

    const handleFilterSelect = (evt:any) => {
        const value: keyof PlayerStats = evt.target.value
        setFilter(prevFilter => {
            return {...prevFilter, stat: value}
        })
    }
    const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        setFilter(prevFilter => {
            return {...prevFilter, name: searchPlayerName}
        })
    }
    
    return(
        <section>
            <form onSubmit={handleSearchSubmit}>
                <input placeholder="Search by Player Name..." value={searchPlayerName} onChange={(evt) => setSearchPlayerName(evt.target.value)}/>
            </form>
            <select onChange={handleFilterSelect} value={filter.stat}>
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
            {
            matches.length ?
            matches.map(player => (
                <p key={player.PlayerID}>
                    {player.Name} - from matches {player[filter.stat]}
                </p>
            ))  :
            players.map(player => (
                <p key={player.PlayerID}>
                    {player.Name}
                </p>
            ))}
        </section>
    )
}