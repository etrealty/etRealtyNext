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



    return (
        <>
        <div className={styles.homesBoxDiv}>
            <div className={styles.imgDiv}>
                <img className={styles.homeImg} src={home.photos[0].href} />
            </div> 
            <p className={styles.textP}>
                {home.permLink.slice(0, home.permLink.lastIndexOf('MO') +2).replaceAll('-', ' ').replaceAll('_', '')}
            </p>
            <p className={styles.textP}>
                Date Listed: {format(new Date(home.listDate), 'MM-dd-yyyy')}
            </p>
            <div className={styles.infoDiv}>
                <div className={styles.infoItem}>
                    <p>
                        {home.description.beds}
                    </p>
                   <GiBed style={{ fontSize: '26px', marginLeft: '5px', marginTop: '10px'}} />
                </div>
                <div className={styles.infoItem}>
                    <p>
                        {home.description.baths}
                    </p>
                   <GiBathtub style={{ fontSize: '20px', marginLeft: '5px', marginTop: '10px'}} />
                </div>
                <div className={styles.infoItem}>
                    <p>
                        {home.description.sqft}
                    </p>
                    <MdSquareFoot style={{  fontSize: '20px', marginLeft: '5px', marginTop: '14px' }} />
                </div>
                <div>
                    <p>
                        ${home.listPrice}
                    </p>
                </div>
            </div>
            <div className={styles.btnDiv}>
                <p>
                    <Link href={`homes/${home.listId}`}> 
                        <button className={styles.Btn}> More Info </button>
                    </Link>
                </p>
            </div>
            

                
            
        </div>
        </>
    )


}

export default HomeCard;
