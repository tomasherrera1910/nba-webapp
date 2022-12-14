import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { GamesHeader } from '../components/GamesHeader'

import { TeamsGrid } from '../components/TeamsGrid'
import { api } from '../utils/api'
import type { Team, Game, TeamInfo } from '../utils/types'

type Props = {
  teams: Team[];
  yesterdayGames: Game[];
  todayGames: Game[];
  tomorrowGames: Game[];
  teamsObject: Record<Team['Key'], TeamInfo>;
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const teams = await api.getTeams()
  const yesterdayGames = await api.getGamesByDay('yesterday')
  const todayGames = await api.getGamesByDay('today')
  const tomorrowGames = await api.getGamesByDay('tomorrow')
  const teamsObject = await api.getTeamsInfo()
  return {
    props: {
      teams,
      yesterdayGames,
      todayGames,
      tomorrowGames,
      teamsObject
    }
  }
}
const Home: NextPage<Props> = ({teams, yesterdayGames, todayGames, tomorrowGames, teamsObject}) => {
  return (
    <div>
      <Head>
        <title>NBA Web</title>
        <meta name="description" content="NBA web made and desgined by a fan" />
        {/* <link rel="icon" href="/nba-logo.png" /> */}
      </Head>
      <main>
        <GamesHeader yesterday={yesterdayGames} today={todayGames} tomorrow={tomorrowGames} teamsObject={teamsObject}/>
        <TeamsGrid teams={teams}/>
      </main>
    </div>
  )
}

export default Home
