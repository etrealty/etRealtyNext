import React, { ReactElement } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../../components/Map'



// bug is keeping this from working  googlemaps/react-wrapper issue #542
const Search = () => {

    const center = {
        lat: 38.397518,
        lng: -94.351616
    }

    const render = (status: Status): ReactElement => {
        return <h1>{status}</h1>
    }



    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLEAPI!} render={render}> 
                <Map center={center} zoom={4} />
            </Wrapper>
            <div className='homes'>
            </div>
        
        </div>

    )

}

export default Search;
