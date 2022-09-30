import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { GiBed, GiBathtub } from 'react-icons/gi'
import { MdSquareFoot } from 'react-icons/md'
import styles from '../../styles/Homes.module.css'
import { format } from 'date-fns'
import Link from 'next/link'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault'
import { type H } from '../../utils/houseType'
import HomeCard from '../../components/HomeCard'

type Props = {
    homesList: H[]
}


const Homes = ({ homesList }: Props) => {
    console.log('homes4sale', homesList)



    return (
        <div className={styles.homesMainDiv}>
            <Head>
                <title>Homes</title>
            </Head>
            {homesList.map((home: H, index: number) => <HomeCard home={home} key={index} /> )}
        </div>
    )

}

export default Homes;

export const getServerSideProps: GetServerSideProps = async () => {
    const homesForSale = await fetchHomesDefault() 

    const homesList: H[] = await homesForSale.map((home: any) => {
        return {
            description: home['description'],
            listDate: home['list_date'],
            listPrice: home['list_price'],
            listId: home['listing_id'],
            location: home['location'],
            permLink: home['permalink'],
            photos: home['photos']
        }

    })


    return {
        props: {
            homesList: homesList
        }
    }
}

