import { useState } from 'react';
import WrapperMap from "../../components/WrapperMap";
import HomeCardList from '../../components/HomeCardList';
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { fetchHomesDefault } from '../../utils/fetchHomesDefault';
import { type H } from '../../utils/houseType' 
import { useEffect, useRef } from 'react';

// change the way the selected home is displayed
// add a div around the homecard and have it highlighted if the house is selected
// instead of passing the selected boolean into the home card

const SearchHomes = ({houses}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [selectedHome, setSelectedHome] = useState<H | undefined>()
    const refList = useRef<Object[]>([])
    const refs = useRef<(HTMLDivElement | null)[]>([])
    
    //console.log('homes from SSR', houses)
    //console.log('selected home ====>', selectedHome) 
   
    function scrollToHome(id: string) {
        //const findRef = refList.current.forEach((obj: any) => console.log(obj))
        //const findRealRef = refs.current.forEach((obj: any) => console.log(obj));
        let matchedRef: any;
        const mRef = refList.current.map((obj: any)=> {
            if(obj.homeId === id) {
                matchedRef = obj;
            }
        })
        console.log(`The matched Ref was = ${matchedRef}`);
        const scroll = refs.current.map((obj:any, idx: number) => {
            if(matchedRef.ind === idx){
                //console.log("FOUND IT BABY");
                obj.scrollIntoView();
            }
        }) 

    }


    return(
        <div style={{height: '100%'}}>
            <h2 style={{textAlign: 'center'}}>Find your future home.</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <WrapperMap setSelectedHome={setSelectedHome} homes={houses} scrollToHome={scrollToHome} />
                <div style={{ marginLeft: '40px', marginRight: '10px', overflow: 'hidden'}}>
                    <HomeCardList homes={houses} selected={selectedHome} refList={refList} refs={refs} />
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
