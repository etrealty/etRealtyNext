import type { NextPage } from 'next'
import Head from 'next/head'
import Slideshow from '../components/Slideshow';
import Welcome from '../components/Welcome'




const Home: NextPage = () => {
 

  return (
    <div style={{background: '#DDE3DD'}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{height: '100%'}}>
        <Welcome />
        <div style={{background: '#DDE3DD' ,height: '70%', width: '80%', margin: 'auto', marginBottom: '90px'}}>
            <Slideshow />
        </div>
      </main>
    </div>
  )
}

export default Home
