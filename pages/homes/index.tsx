import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
//import { GiBed, GiBathtub } from 'react-icons/gi'
//import { MdSquareFoot } from 'react-icons/md'
import styles from '../../styles/Homes.module.css'
//import { format } from 'date-fns'
//import Link from 'next/link'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault'
import { type H } from '../../utils/houseType'
import HomeCard from '../../components/HomeCard'


const Homes = ({ properties }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    return (
        <div className={styles.homesMainDiv}>
            <Head>
                <title>Homes</title>
            </Head>
             {properties.map((home: H, index: number) => <HomeCard home={home} key={index} /> )}
        </div>
    )

}

export default Homes;

export const getServerSideProps: GetServerSideProps<{properties: H[]}> = async () => {
    const properties = await fetchHomesDefault() 

    return {
        props: {
            properties
        }
    }
}

