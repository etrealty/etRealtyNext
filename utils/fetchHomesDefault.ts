import axios from 'axios'


export const fetchHomesDefault = async () => {
    const { data } = await axios.get('http://localhost:7050/mls')

    return data.homes.data.home_search.results
 
}
