import React from 'react'
import styles from '../styles/Homes.module.css'
import { format } from 'date-fns'
import { GiBed, GiBathtub } from 'react-icons/gi'
import { MdSquareFoot } from 'react-icons/md'
import Link from 'next/link'
import { type H } from '../utils/houseType'

type CompProps = {
    home: H
    selected?: boolean
}


const HomeCard = ({ home, selected }: CompProps) => {



  // Address: String | null,
  // ApiUpdateAt: String | null,
  // Baths: Number | null,
  // BathsFull: Number | null,
  // BathsHalf: Number | null,
  // Beds: Number | null,
  // Branding: String | null,
  // City: String | null,
  // County: String | null,
  // Garage: Number | null,
  // Latitude: Number | null,
  // ListDate: String | null,
  // ListPrice: Number | null,
  // ListingId: String | null,
  // Longitude: Number | null,
  // LotSqft: Number | null,
  // PermLink: String | null,
  // Photos: String[] | null,
  // PostalCode: String | null,
  // PropertyId: String | null,
  // PropertyType: String | null,
  // Sqft: Number | null,
  // State: String | null,
  // StateCode: String | null,
  // Status: String | null,
  // Stories: Number | null,
  // Tags: String[] | null,
  // YearBuilt: Number | null,
    const image = home.Photos != null ? home.Photos[0] : ' '

    return (
        <>
        <div className={styles.homesBoxDiv}>
            <div className={styles.imgDiv}>
                <img className={styles.homeImg} src={image} />
            </div> 
            <p className={styles.textP}>
                {home.PermLink !== null ? home.PermLink.slice(0, home.PermLink.lastIndexOf('MO') +2).replaceAll('-', ' ').replaceAll('_', ''):"No permlink"}
            </p>
            <p className={styles.textP}>
                Date Listed: {format(new Date(home.ListDate !== null ? home.ListDate : '01-01-2001' ), 'MM-dd-yyyy')}
            </p>
            {selected ?
            <div className={styles.infoDiv} style={{backgroundColor: '#6f8e70'}}>
                <div className={styles.infoItem}>
                    <p>
                        {home.Beds}
                    </p>
                   <GiBed style={{ fontSize: '26px', marginLeft: '5px', marginTop: '10px'}} />
                </div>
                <div className={styles.infoItem}>
                    <p>
                        {home.Baths}
                    </p>
                   <GiBathtub style={{ fontSize: '20px', marginLeft: '5px', marginTop: '10px'}} />
                </div>
                <div className={styles.infoItem}>
                    <p>
                        {home.Sqft}
                    </p>
                    <MdSquareFoot style={{  fontSize: '20px', marginLeft: '5px', marginTop: '14px' }} />
                </div>
                <div>
                    <p>
                        ${home.ListPrice}
                    </p>
                </div>
            </div>
            : 
            <div className={styles.infoDiv}>
                <div className={styles.infoItem}>
                    <p>
                        {home.Beds}
                    </p>
                   <GiBed style={{ fontSize: '26px', marginLeft: '5px', marginTop: '10px'}} />
                </div>
                <div className={styles.infoItem}>
                    <p>
                        {home.Baths}
                    </p>
                   <GiBathtub style={{ fontSize: '20px', marginLeft: '5px', marginTop: '10px'}} />
                </div>
                <div className={styles.infoItem}>
                    <p>
                        {home.Sqft}
                    </p>
                    <MdSquareFoot style={{  fontSize: '20px', marginLeft: '5px', marginTop: '14px' }} />
                </div>
                <div>
                    <p>
                        ${home.ListPrice}
                    </p>
                </div>
            </div>
            }
            <div className={styles.btnDiv}>
                <p>
                    <Link href={`homes/${home.PropertyId}`}> 
                        <button className={styles.Btn}> More Info </button>
                    </Link>
                </p>
            </div>
            

                
            
        </div>
        </>
    )


}

export default HomeCard;
