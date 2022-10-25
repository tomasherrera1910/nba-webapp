import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { PlayerTeamCard } from '../../../../components/PlayerTeamCard'
import { api } from '../../../../utils/api'
import { Player } from '../../../../utils/types'


type Props = {
  players: Player[]
}
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const {id} = context.params!
  const players: Player[] = await api.getPlayersByTeam(String(id))
  return {
    props: {
      players
    }
  }
}
const PlayersTeam: NextPage<Props> = ({players}) => {
  return (
    <div>
      <Head>
        <title>NBA Web | Players</title>
        <meta name="description" content="NBA web made and desgined by a fan" />
        {/* <link rel="icon" href="/nba-logo.png" /> */}
      </Head>
      <main>
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