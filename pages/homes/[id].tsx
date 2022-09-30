import { returnSingleHome } from "../../utils/returnSingleHome";
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/HomeId.module.css'
import format from 'date-fns/format'


type H = {
    description: {
        baths: number | string | null
        beds: number | string | null
        garage: number | string | null
        lot_sqft: number | string | null
        sqft: number | string | null
        type: string | null | null
        year_built: number | string | null
    }
    listDate: string
    listPrice: number
    listId: string
    location: {
        address: {
            line: string
            city: string
            postal_code: string
            state_code: string
        }
        county: {
            name: string
        }
    }
    permLink: string
    photos: [{
        href: string    
    }]
    
}


type PageProps = {
    home: {}
}




const HomeInfo: NextPage<InferGetServerSidePropsType<typeof getServerSideProps >> = ({ home }) => {
    console.log(home)
    const thisH: H = {
        description: home['description'],
        listDate: home['list_date'],
        listPrice: home['list_price'],
        listId: home['listing_id'],
        location: home['location'],
        permLink: home['permalink'],
        photos: home['photos']
    }


    return (
        <div>
            <Head>
                <title>HomeID</title>
            </Head>
            <div className={styles.homeDiv}>
                <div className={styles.imgDiv}>
                    <img className={styles.homeImg} src={thisH.photos[0].href} /> 
                </div>
                <div>
                    <p>
                        Address: {thisH.location.address.line}, {thisH.location.address.city}, {thisH.location.address.postal_code}, {thisH.location.address.state_code}
                    </p>
                    <p>
                        Bedrooms: {thisH.description.beds}
                    </p>
                    <p>
                        Baths: {thisH.description.baths}
                    </p>
                    <p>
                        Sqft: {thisH.description.sqft}
                    </p>
                    <p>
                        Lot Size: {thisH.description.lot_sqft} SqFt
                    </p>
                    <p>
                        Date Listed: {format(new Date(thisH.listDate), 'MM/dd/yyy')}
                    </p>
                    <p>
                        List Price: ${thisH.listPrice}
                    </p>
                </div>

            </div>

        </div>
    )

}

export default HomeInfo;


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    if(context.params == undefined) return
    const { id } = context.params
    const home: Object = await returnSingleHome(id)
    if(home === undefined){
        return
    }
    return {
            props: { home }
        }  

}
