import { fetchHomesDefault } from "./fetchHomesDefault";

export const returnSingleHome = async (homeId: string | string[] | undefined) => {
    const homes: any = await fetchHomesDefault()
    if(homes == undefined) return
    const singleHome = homes.filter((h: any) => h?.location?.address?.line === homeId)
    return singleHome
}
