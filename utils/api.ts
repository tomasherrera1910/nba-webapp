import type { Player, RawPlayer, Team } from "./types"
const baseURL = 'https://api.sportsdata.io/v3/nba'
const KEY = process.env.KEY_NBA_API
export const api = {
    getTeams: async():Promise<Team[]> => {
        return fetch(`${baseURL}/scores/json/teams?key=${KEY}`)
        .then(response => response.json())
    },
    getPlayersByTeam: async(team:string):Promise<Player[]> => {
        const response = await fetch(`${baseURL}/scores/json/Players/${team}?key=${KEY}`)
        const data: RawPlayer[] = await response.json()
        return data.map(player => {
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
                Experience: player.Experience
            }
        })
    }
}
