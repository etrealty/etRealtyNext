import { returnSingleHome } from "../../utils/fetchSingleHome";
import { GetServerSidePropsContext, GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/HomeId.module.css'
import format from 'date-fns/format'
import { type H } from '../../utils/houseType';
import DescriptionBox from "../../components/DescriptionBox";




const HomeInfo = ({ property }: any) => {
    console.log(property)
    const home: H = property;

    return (
        <div style={{height: '100vh'}}>
            <Head>
                <title>{home.ListingId}</title>
            </Head>
            <div className={styles.homeDiv}>
                <div className={styles.titleDiv}>
                    <div className={styles.addressDiv}>
                       <div>
                           <span>{home.Address}</span>
                       </div> 
                       <div>
                           <span className={styles.city}>{home.City}</span>
                           <span className={styles.statecode}>{home.StateCode},</span>
                           <span>{home.PostalCode}</span>
                       </div>
                    </div>
                    <div className={styles.priceDiv}>
                        <span>${home.ListPrice}</span>
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <img className={styles.homeImg} src={home.Photos !== null ? home.Photos[0] : ' '} /> 
                </div>
                <div>
                    <div className={styles.descriptionDiv}>
                        <DescriptionBox home={home} />
                    </div>
                    <div className={styles.infoBox}>
                        <p>
                            Address: {home.Address}, {home.City}, {home.PostalCode}, {home.State}
                        </p>
                        <p>
                            Bedrooms: {home.Beds}
                        </p>
                        <p>
                            Baths: {home.Baths}
                        </p>
                        <p>
                            Sqft: {home.Sqft}
                        </p>
                        <p>
                            Lot Size: {home.LotSqft} SqFt
                        </p>
                        <p>
                            Date Listed: {format(new Date(home.ListDate !== null ? home.ListDate : '01/01/2001'), 'MM/dd/yyy')}
                        </p>
                        <p>
                            List Price: ${home.ListPrice}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default HomeInfo;


export const getServerSideProps = async ({params}: GetServerSidePropsContext) => {
    if(params == undefined) return
    const id = params.id as string;
    const property: H = await returnSingleHome(id) 
    if(property === undefined){
        return
    }
    return {
            props: {
                property
            }
        }  

}
