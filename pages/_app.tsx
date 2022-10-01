import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { proxy } from 'valtio'
import { fetchHomesDefault } from '../utils/fetchHomesDefault'
import { useEffect, useState } from 'react'


export let homeStore: any


function MyApp({ Component, pageProps }: AppProps) {
  
// going to implement a check here to see if data is in store
// if not going to feed the store
    const [renders, setRenders] = useState(0)


    useEffect(() => {
        if(renders === 0){
            setRenders(renders + 1)
            fetchHomesDefault()
            .then(res => {
                homeStore = proxy({
                homes: res
                })
            })
        }

    }, [])

    




  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
