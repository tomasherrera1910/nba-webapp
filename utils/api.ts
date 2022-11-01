import type { Player, RawPlayer, RawPlayerStatsByTeam, Team, RawTeam, RawTeamStats, RawGame, Game, TeamInfo, TeamInfoDetail} from "./types"
import {formatPercentages, formatStats} from './formatStats'
const baseURL = 'https://api.sportsdata.io/v3/nba'
const KEY = process.env.KEY_NBA_API
export const api = {
    getTeams: async():Promise<Team[]> => {
        const responseTeam = await fetch(`${baseURL}/scores/json/teams?key=${KEY}`)
        const teamsData:RawTeam[] = await responseTeam.json()
        const responseTeamPosition = await fetch(`${baseURL}/scores/json/Standings/2023?key=${KEY}`)
        const teamsPosition:RawTeamStats[] = await responseTeamPosition.json()
        const teamsMap = new Map()
         teamsData.forEach(team => (
            teamsMap.set(team.Key, {
                TeamID: team.TeamID,
                Key: team.Key,
                Active: team.Active,
                City: team.City,
                Name: team.Name,
                Conference: team.Conference,
                Division: team.Division,
                PrimaryColor: team.PrimaryColor,
                SecondaryColor: team.SecondaryColor,
                TertiaryColor: team.TertiaryColor,
                WikipediaLogoUrl: team.WikipediaLogoUrl,
            })
         ))
         teamsPosition.forEach(team => (
            teamsMap.set(team.Key, {
                ...teamsMap.get(team.Key),
                Wins: team.Wins,
                Losses: team.Losses,
                Percentage: team.Percentage
            })
         ))
        const teams: Team[] = Array.from(teamsMap.values())
        return teams
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
    },
    getGamesByDay: async(day:string):Promise<Game[]> => {
        const date = new Date()
        if(day === 'yesterday'){
            date.setDate(date.getDate() - 1)
        }else if(day === 'tomorrow'){
            date.setDate(date.getDate() + 1)
        }
        const dayResponse = await fetch(`${baseURL}/scores/json/GamesByDate/${date.toLocaleDateString('en-US').replaceAll('/','-')}?key=${KEY}`)
        const dayGames:RawGame[] = await dayResponse.json()
        return dayGames.map(game => {
            return {
                GameID: game.GameID,
                HomeTeam: game.HomeTeam,
                AwayTeam: game.AwayTeam,
                DateTimeUTC: game.DateTimeUTC,
                Channel: game.Channel,
                Status: game.Status,
                HomeTeamScore: game.HomeTeamScore,
                AwayTeamScore: game.AwayTeamScore,
                Quarters: game.Quarters,
                IsClosed: game.IsClosed
            }
        }) || []
    },
    getTeamsInfo: async():Promise<Record<RawTeam['Key'], TeamInfo>> => {
        const teamsData = await api.getTeams()
        let teamsInfo:Record<RawTeam['Key'], TeamInfo> = {}
        teamsData.map(team => (
            teamsInfo[team.Key] = {
                LogoURL: team.WikipediaLogoUrl,
                Wins: team.Wins,
                Losses: team.Losses,
                PrimaryColor: team.PrimaryColor,
                SecondaryColor: team.SecondaryColor
            })
        )
        return teamsInfo
    },
    getOneTeamInfo: async(teamKey:string):Promise<TeamInfoDetail> => {
        let teamInfo:TeamInfoDetail = {
                    Key: teamKey,
                    City: '',
                    Name: '',
                    Conference: '',
                    Division: '',
                    LogoURL: '',
                    Wins: 0,
                    Losses: 0,
                    PrimaryColor: '',
                    SecondaryColor: '',
                    ConferencePosition:0,
                    DivisionPosition:0,
                    NBAPosition:0
        }
        const teams = await api.getTeams()
        teams.forEach(team => {
            if(team.Key === teamKey){
                teamInfo = {
                    ...teamInfo,
                    City: team.City,
                    Name: team.Name,
                    Conference: team.Conference,
                    Division: team.Division,
                    LogoURL: team.WikipediaLogoUrl,
                    Wins: team.Wins,
                    Losses: team.Losses,
                    PrimaryColor: team.PrimaryColor,
                    SecondaryColor: team.SecondaryColor,
                }
            }
        })
        const teamsNBA = teams.sort((a,b) => b.Percentage - a.Percentage).map(team => team.Key)
        const teamsDivision = teams.filter(team => team.Division === teamInfo.Division).sort((a,b) => b.Percentage - a.Percentage).map(team => team.Key)
        const teamsConference = teams.filter(team => team.Conference === teamInfo.Conference).sort((a,b) => b.Percentage - a.Percentage).map(team => team.Key)
        teamInfo={
            ...teamInfo,
            DivisionPosition: teamsDivision.indexOf(teamInfo.Key) + 1,
            ConferencePosition: teamsConference.indexOf(teamInfo.Key) + 1,
            NBAPosition: teamsNBA.indexOf(teamInfo.Key) + 1
        }
        return teamInfo
    }
}
