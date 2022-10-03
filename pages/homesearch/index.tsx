import { useEffect, useState } from 'react';
import WrapperMap from "../../components/WrapperMap";
import { useSnapshot } from 'valtio'
import { homeStore } from '../_app'


// going to hide this and use googles official react wrapper for their maps
// I'm gonna keep it incase i need it for emergency UI
//
// this is a temp fix for google maps until the official google maps reeact wrapper is fixed 
// and everything is working properly for react 18


const SearchHomes = () => {
    const allHomes = useSnapshot(homeStore)
    const [selectedHome, setSelectedHome] = useState()
   // const [markerHomes, setMarkerHomes] = useState(allHomes.homes)
    console.log('all homes=> ', allHomes.homes) 



    return(
        <div>
            <h2>Map</h2>
            <div style={{display: 'flex'}}>
                <WrapperMap setSelectedHome={setSelectedHome} homes={allHomes.homes} />
                <div>
                    <h2> homes go here</h2>
                </div>
            </div>
        </div>
    )

}

export default SearchHomes;
