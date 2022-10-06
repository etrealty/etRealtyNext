import { useState } from 'react';
import WrapperMap from "../../components/WrapperMap";
import HomeCardList from '../../components/HomeCardList';
import { GetServerSideProps } from 'next'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault';
import { type H } from '../../utils/houseType' 
import ScrollToTop from 'react-scroll-to-top';


// change the way the selected home is displayed
// add a div around the homecard and have it highlighted if the house is selected
// instead of passing the selected boolean into the home card

const SearchHomes = ({ homes }: any) => {
    const [selectedHome, setSelectedHome] = useState<H | undefined>()
    console.log('homes from SSR', homes)
    console.log('selected home ====>', selectedHome) 
    return(
        <div>
            <h2 style={{textAlign: 'center'}}>Find your future home.</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <WrapperMap setSelectedHome={setSelectedHome} homes={homes} />
                <div style={{ marginLeft: '40px', marginRight: '10px'}}>
                    <h2 style={{textAlign: 'center'}}> All Homes</h2>
                    <HomeCardList homes={homes} selected={selectedHome} />
                </div>
            </div>
            <ScrollToTop smooth />
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
