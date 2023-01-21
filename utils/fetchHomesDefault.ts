import axios from 'axios'
import { type H } from './houseType';

let apiURL="https://etrealty-api-6ca9l.ondigitalocean.app/"

export const fetchHomesDefault = async () => {
    const { data } = await axios.get(apiURL + "api/all")

    const properties: H[] = data.properties.map((property: H) => {
        return property
         
    }) 

    return properties
 
}
