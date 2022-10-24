import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { TeamsGrid } from '../components/TeamsGrid'
import { api } from '../utils/api'
import { type Team } from '../utils/types'

type Props = {
  teams: Team[]
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  
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
        <Navbar/>
        <TeamsGrid teams={teams}/>
        <Footer/>
      </main>
    </div>
  )
}

export default Home
