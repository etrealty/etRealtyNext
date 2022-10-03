import { useState } from 'react';
import WrapperMap from "../../components/WrapperMap";
import HomeCard from '../../components/HomeCard';
import { GetServerSideProps } from 'next'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault';
import { type H } from '../../utils/houseType'  
// going to hide this and use googles official react wrapper for their maps
// I'm gonna keep it incase i need it for emergency UI
//
// this is a temp fix for google maps until the official google maps reeact wrapper is fixed 
// and everything is working properly for react 18


const SearchHomes = ({ homes }: any) => {
    const [selectedHome, setSelectedHome] = useState<H | undefined>()
    console.log('homes from SSR', homes)
    console.log('selected home ====>', selectedHome) 

    return(
        <div>
            <h2>Map</h2>
            <div style={{display: 'flex'}}>
                <WrapperMap setSelectedHome={setSelectedHome} homes={homes} />
                <div>
                    <h2> homes go here</h2>
                    {homes.map((home: H, index: number)=> {
                            let selected = false
                            if(selectedHome?.listId === home.listId){
                                selected = true
                            }
                        return (
                            <HomeCard home={home} selected={selected} key={index}/>
                        )
                        })}
                </div>
            </div>
        </div>
    )

}

export default SearchHomes;


export const getServerSideProps: GetServerSideProps = async () => {
    const houses = await fetchHomesDefault() 
    const mapHomes: H[] = houses.map((house: any) => {
            return {
                description: house.description,
                listDate: house.list_date,
                listPrice: house.list_price,
                listId: house.listing_id,
                location: house.location,
                permLink: house.permalink,
                photos: house.photos,
            }

        })

    return {
        props: {
            homes: mapHomes
        }
    }
}
