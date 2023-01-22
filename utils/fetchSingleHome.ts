import axios from 'axios'
import { type H } from './houseType';

let apiURL="https://etrealty-api-6ca9l.ondigitalocean.app/"

export async function returnSingleHome(id: string | string[] | undefined) {
    const { data } = await axios.get(apiURL + `api/property/${id}`)


    const property: H = data.property

    return property


}
