import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { TeamsGrid } from '../components/TeamsGrid'
import { api } from '../utils/api'
import { type Team } from '../utils/types'

type Props = {
  teams: Team[]
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const teams = await api.getTeams()
  return {
    props: {
      teams
    }
  }
}
const Home: NextPage<Props> = ({teams}) => {

  return (
    <div>
      <Head>
        <title>NBA Web</title>
        <meta name="description" content="NBA web made and desgined by a fan" />
        {/* <link rel="icon" href="/nba-logo.png" /> */}
      </Head>
      <main>
        <TeamsGrid teams={teams}/>
      </main>
    </div>
  )
}

export default Home
