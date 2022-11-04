import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { PlayerTeamCard } from '../../../components/PlayerTeamCard'
import { TeamInfoDetailCard } from '../../../components/TeamInfoDetailCard'
import { api } from '../../../utils/api'
import type { Player, TeamInfoDetail } from '../../../utils/types'


type Props = {
  players: Player[];
  teamInfo: TeamInfoDetail;
}
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const {id} = context.params!
  const players: Player[] = await api.getPlayersByTeam(String(id))
  const teamInfo: TeamInfoDetail = await api.getOneTeamInfo(String(id))
  return {
    props: {
      players,
      teamInfo
    }
  }
}
const PlayersTeam: NextPage<Props> = ({players, teamInfo}) => {
  // console.log({teamInfo})
  return (
    <div>
      <Head>
        <title>NBA Web | {teamInfo.Name}</title>
        <meta name="description" content="NBA web made and desgined by a fan" />
        {/* <link rel="icon" href="/nba-logo.png" /> */}
      </Head>
      <main>
        <TeamInfoDetailCard teamInfo={teamInfo}/>
        {
          players.map(player => (
           <PlayerTeamCard key={player.PlayerID} player={player}/>
          ))
        }
      </main>
    </div>
  )
}

export default PlayersTeam