import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { GiBed, GiBathtub } from 'react-icons/gi'
import { MdSquareFoot } from 'react-icons/md'
import styles from '../../styles/Homes.module.css'
import { format } from 'date-fns'
import Link from 'next/link'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault'

type Props = {
    homesForSale: object[]
}


const Homes = ({ homesForSale }: Props) => {
    console.log('homes4sale', homesForSale)

    return (
        <div>
            console

        </div>
    )

}

export default Homes;

export const getServerSideProps: GetServerSideProps = async () => {
    const homesForSale = await fetchHomesDefault()
    
    return {
        props: {
            homesForSale: homesForSale
        }
    }
}

