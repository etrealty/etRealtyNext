import { useEffect, useRef, useState } from "react";



// bug is keeping this from working  googlemaps/react-wrapper issue #542
// issue is resolved.. i was not specifing the heigh of the map! noob
//
const Map = ({ center, zoom}: { center: google.maps.LatLngLiteral; zoom: number; }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();
    useEffect(() => {
        if(ref.current && !map){
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom,
            }))
        }
    }, [ref, map]);

    return <div ref={ref} id='map' style={{position: 'fixed', height: '800px', width: '50%'}}/>

}

export default Map;
