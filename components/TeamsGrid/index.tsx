import {useMemo} from 'react'
import type { Team } from "../../utils/types";
import ConferenceGrid from './ConferenceGrid';
import styles from './TeamsGrid.module.css'
const {teamsContainer} = styles
type Props = {
    teams: Team[]
}
export function TeamsGrid({teams}: Props){
    const eastTeams = useMemo<Team[]>(() => {
        return teams.filter(team => team.Conference.toLowerCase() === 'eastern').sort((a, b) => a.Name.localeCompare(b.Name))
    },[teams])
    const westTeams = useMemo<Team[]>(() => {
        return teams.filter(team => team.Conference.toLowerCase() === 'western').sort((a, b) => a.Name.localeCompare(b.Name))
    },[teams])

    return (
        <section className={teamsContainer}>
            <ConferenceGrid teams={eastTeams} title={`East`}/>
            <ConferenceGrid teams={westTeams} title={`West`}/>
        </section>
    )

}