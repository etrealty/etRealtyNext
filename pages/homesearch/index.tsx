import { useState } from 'react';
import WrapperMap from "../../components/WrapperMap";
import HomeCardList from '../../components/HomeCardList';
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault';
import { type H } from '../../utils/houseType' 
import { useEffect } from 'react';

// change the way the selected home is displayed
// add a div around the homecard and have it highlighted if the house is selected
// instead of passing the selected boolean into the home card

const SearchHomes = ({houses}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [selectedHome, setSelectedHome] = useState<H | undefined>()
    console.log('homes from SSR', houses)
    console.log('selected home ====>', selectedHome) 
   
    
    useEffect(()=>{},[selectedHome])



    return(
        <div style={{height: '100%'}}>
            <h2 style={{textAlign: 'center'}}>Find your future home.</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <WrapperMap setSelectedHome={setSelectedHome} homes={houses} />
                <div style={{ marginLeft: '40px', marginRight: '10px', overflow: 'hidden'}}>
                    <HomeCardList homes={houses} selected={selectedHome} />
                </div>
            </div>
        </div>
    )

}

export default SearchHomes;


export const getServerSideProps: GetServerSideProps<{houses: H[]}> = async () => {
    const houses = await fetchHomesDefault() 

    return {
        props: {
            houses
        }
    }
}
