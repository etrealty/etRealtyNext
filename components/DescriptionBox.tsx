import { type H } from '../utils/houseType'

export default function DescriptionBox({home}: any) {
    let description;
    let pID;
    if(home.PropertyId !== null) {
        const x = [...home.PropertyId];
        const len = x.length;

        pID = parseInt(x[len-1]);
    }
    if (home.Beds === null) {
        description = `Check out this ${home.LotSqft} lot!`
    }else {
        switch(pID) {
            case 0: 
                description = `Check out this ${home.Beds} bed ${home.Baths} home!`            
                break;
            case 1:

                description = `Don't miss this opportunity to own this ${home.Beds} bed ${home.Baths} bath house!`            
                break;
            case 2:

                description = `Beautiful ${home.Beds} bed ${home.Baths} home.`            
                break;
            case 3:

                description = `This ${home.Sqft} sqft home with ${home.Beds} bed ${home.Baths} bath, should not be over`            
                break;
            case 4:

                description = `Hurry, contact us to learn more about this ${home.Baths} bath ${home.Beds} bed home.`            
                break;
            case 5:

                description = `Very nice ${home.Baths} bath ${home.Beds} bed home.`            
                break;
            case 6:
                
                description = `Look at this nice ${home.Baths} bath ${home.Beds} bed home.`            
                break;
            case 7:
                
                description = `Nice ${home.Sqft} sqft home with ${home.Beds} bed and ${home.Baths} bath.`            
                break;
            case 8:

                description = `Beautiful ${home.Beds} bed ${home.Baths} bath ${home.Sqft} sqft home.`            
                break;
            case 9:

                description = `Awesome ${home.Beds} bed ${home.Baths} bath ${home.Sqft} sqft home.`            
                break;
        }
    }


    return (
        <p>{description}</p>

    )


}
