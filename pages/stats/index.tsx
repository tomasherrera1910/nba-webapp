import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { PlayersStatsGrid } from '../../components/PlayersStatsGrid'
import { api } from '../../utils/api'
import type { PlayerStats, TeamInfo } from '../../utils/types'


type Props = {
  players: PlayerStats[];
  teamInfo: Record<string, TeamInfo>;
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  
  const players: PlayerStats[] = await api.getPlayersStats()
  const teamInfo: Record<string, TeamInfo> = await api.getTeamsInfo()
  return {
    props: {
      players,
      teamInfo
    }
  }
}
const PlayersStats: NextPage<Props> = ({players, teamInfo}) => {
  // console.log({teamInfo})
  return (
    <div>
      <Head>
        <title>NBA Web | Stats</title>
        <meta name="description" content="NBA web made and desgined by a fan" />
        {/* <link rel="icon" href="/nba-logo.png" /> */}
      </Head>
      <main>
        <PlayersStatsGrid players={players} teamInfo={teamInfo}/>
      </main>
    </div>
  )
}

export default PlayersStats