import type { NextPage } from 'next'
import Head from 'next/head'
import Slideshow from '../components/Slideshow';
import Welcome from '../components/Welcome'




const Home: NextPage = () => {
 

  return (
    <div style={{background: '#DDE3DD'}}>
      <Head>
        <title>Homestead Realty</title>
        <meta name="description" content="Homestead Realty Home page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{height: '100%'}}>
        <Welcome />
        <div style={{background: '#DDE3DD' ,height: '70%', width: '80%' , marginTop: '50px', margin: 'auto', marginBottom: '110px'}}>
            <Slideshow />
        </div>
      </main>
    </div>
  )
}

export default Home
