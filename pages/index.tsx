import type { NextPage } from 'next'
import Download from '../components/download'
import Feature from '../components/feature'
import Landing from '../components/landing'


const Home: NextPage = () => {
  return (
    <div id='home' >
      <Landing />
      <Feature />
      <Download />
    </div>
  )
}

export default Home
