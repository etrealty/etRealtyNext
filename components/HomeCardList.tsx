import HomeCard from "./HomeCard";
import { type H } from '../utils/houseType'
import { useState, useEffect, useRef, MutableRefObject } from "react";
import ScrollToTop from 'react-scroll-to-top';

type CompProps = {
    homes: H[]
    selected?: H
    refList: MutableRefObject<Object[]>
    refs: MutableRefObject<(HTMLDivElement | null)[]>
}

const HomeCardList = ({ homes, selected, refList, refs }: CompProps) => {
    //const indexListRef = useRef<Object[]>([])
    //const refs = useRef<(HTMLDivElement | null)[]>([])
    let selectedHome: boolean;
    

    // useEffect(() => {
    //     console.log("-----HomeCard-----");
    //     const findRef = indexListRef.current.filter((obj: any) => obj.homeId === selected?.PropertyId)
    //     if(findRef) {
    //         const idx: number[] = findRef.map((ref: any) => {
    //             const num: number = ref.ind
    //             return num
    //         })
    //         let curRef = refs.current.find((ref: any, index: number) => index === idx[0] )
    //         console.log(`idx from homeCard = ${idx[0]}`)
    //         console.log(`selected = ${selected?.Address}`)
    //         //console.log(`curRef = ${curRef?.}`)
    //         curRef?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
    //     }
    //     console.log("-------end HomeCard -----");
    // }, [selected])

   

    return (
        <div style={{width: '100%',height: '100vh', overflow: 'scroll'}} >
            <div style={{textAlign: 'center'}}>Homes</div>
            {homes.map((home: H, index: number) => {
                selectedHome = false;
                // set the list of indexes for the refs
                const listCheck = refList.current.find((ref: any) => ref.homeId === home.PropertyId)
                if(listCheck == undefined){
                   // indexListRef.current.push({homeId: home.PropertyId, ind: index})
                    refList.current.push({homeId: home.PropertyId, ind: index})
                }
                if(selected?.PropertyId === home.PropertyId){
                    selectedHome = true
                     
                }
                // return the homecard and div
                return  (
                    <div ref={(element) => {refs.current[index] = element}} key={index} >
                        <HomeCard home={home} key={index} selected={selectedHome}/>
                    </div>
                )})}
        </div>

    )


}

export default HomeCardList;
