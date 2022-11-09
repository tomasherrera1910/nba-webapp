import {useMemo} from 'react'
import type { Team } from "../../utils/types";
import ConferenceGrid from './ConferenceGrid';
import styles from './TeamsGrid.module.css'
const {teamsContainer} = styles
type Props = {
    teams: Team[]
}
export function TeamsGrid({teams}: Props){
    // console.log(teams)
    const eastTeams = useMemo<Team[]>(() => {
        return teams.filter(team => team.Conference.toLowerCase() === 'eastern').sort((a, b) => b.Percentage - a.Percentage)
    },[teams])
    const westTeams = useMemo<Team[]>(() => {
        return teams.filter(team => team.Conference.toLowerCase() === 'western').sort((a, b) => b.Percentage - a.Percentage)
    },[teams])

    return (
        <section className={teamsContainer}>
            <ConferenceGrid teams={westTeams} title={`West`}/>
            <ConferenceGrid teams={eastTeams} title={`East`}/>
        </section>
    )

}