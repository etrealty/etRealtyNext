import { fetchHomesDefault } from "./fetchHomesDefault";

export const returnSingleHome = async (homeId: string | string[] | undefined) => {
    console.log('rSH_ID => ', homeId)
    const homes: any = await fetchHomesDefault()
    if(homes == undefined) return
    const singleHome = homes.filter((h: any) => h?.listing_id === homeId)
    return singleHome
}
