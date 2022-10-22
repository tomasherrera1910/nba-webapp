import type { Team } from "./types"
const baseURL = 'https://api.sportsdata.io/v3/nba'
const KEY = process.env.KEY_NBA_API
export const api = {
    getTeams: async():Promise<Team[]> =>{
        return fetch(`${baseURL}/scores/json/teams?key=${KEY}`)
        .then(response => response.json())
    }
}
