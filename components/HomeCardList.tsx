import HomeCard from "./HomeCard";
import { type H } from '../utils/houseType'

type CompProps = {
    homes: H[]
    selected?: boolean
}

const HomeCardList = ({ homes, selected }: CompProps) => {
    
    if(selected){
        // do some work
    }

    return (
        <div style={{background: 'silver'}}>
            {homes.map((home: H, index: number) => {
                return  (
                    <HomeCard home={home} key={index}/>

                )})}
        </div>

    )


}

export default HomeCardList;
