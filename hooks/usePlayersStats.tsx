import { useMemo, useState } from "react";
import { PlayerStats } from "../utils/types";

type Filter = {
    name: string;
    stat: keyof PlayerStats
}
const INITIAL_FILTER:Filter = {
    name: "",
    stat: "Games"
}
export function usePlayersStats(players:PlayerStats[]){
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
    return {matches, filter, searchPlayerName, setSearchPlayerName, handleFilterSelect, handleSearchSubmit}
}