import type { Player, RawPlayer, RawPlayerStatsByTeam, Team } from "./types"
import {formatPercentages, formatStats} from './formatStats'
const baseURL = 'https://api.sportsdata.io/v3/nba'
const KEY = process.env.KEY_NBA_API
export const api = {
    getTeams: async():Promise<Team[]> => {
        return fetch(`${baseURL}/scores/json/teams?key=${KEY}`)
        .then(response => response.json())
    },
    getPlayersByTeam: async(team:string):Promise<Player[]> => {
        const responsePlayer = await fetch(`${baseURL}/scores/json/Players/${team}?key=${KEY}`)
        const dataPlayer: RawPlayer[] = await responsePlayer.json()

        const responsePlayerStats = await fetch(`${baseURL}/stats/json/PlayerSeasonStatsByTeam/2023/${team}?key=${KEY}`)
        const dataPlayerStats: RawPlayerStatsByTeam[] = await responsePlayerStats.json()
        return dataPlayer.map((player, i) => {
            const Games:number = dataPlayerStats[i].Games || 0 
            return {
                PlayerID: player.PlayerID,
                Status: player.Status,
                Team: player.Team,
                Jersey: player.Jersey,
                Position: player.Position,
                FirstName: player.FirstName,
                LastName: player.LastName,
                College: player.College,
                Salary: player.Salary,
                PhotoUrl: player.PhotoUrl,
                Experience: player.Experience,
                Games,
                MinutesPerGame: formatStats(dataPlayerStats[i].Minutes, Games),
                PointsPerGame: formatStats(dataPlayerStats[i].Points, Games),
                AssistsPerGame: formatStats(dataPlayerStats[i].Assists, Games),
                ReboundsPerGame: formatStats(dataPlayerStats[i].Rebounds, Games),
                StealsPerGame: formatStats(dataPlayerStats[i].Steals, Games),
                BlocksPerGame: formatStats(dataPlayerStats[i].BlockedShots, Games),
                TurnoversPerGame: formatStats(dataPlayerStats[i].Turnovers, Games),
                FieldGoalsPercentage: formatPercentages(dataPlayerStats[i].FieldGoalsMade, dataPlayerStats[i].FieldGoalsAttempted),
                FreeThrowPercentage: formatPercentages(dataPlayerStats[i].FreeThrowsMade, dataPlayerStats[i].FreeThrowsAttempted),
                ThreePointsPercentage: formatPercentages(dataPlayerStats[i].ThreePointersMade, dataPlayerStats[i].ThreePointersAttempted)
            }
        }).sort((a,b) => b.MinutesPerGame - a.MinutesPerGame)
    }
}
