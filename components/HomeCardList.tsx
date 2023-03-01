import HomeCard from "./HomeCard";
import { type H } from '../utils/houseType'
import { useState, useEffect, useRef } from "react";
import ScrollToTop from 'react-scroll-to-top';

type CompProps = {
    homes: H[]
    selected?: H
}

const HomeCardList = ({ homes, selected }: CompProps) => {
    const indexListRef = useRef<Object[]>([])
    const refs = useRef<(HTMLDivElement | null)[]>([])
    // const selectedIndex = homes.map((home: H, index: number) => {
    //         if(selected?.listId === home.listId){
    //            return { index: index } 
    //         }
    //     })
    // console.log('SELECTED INDEX', selectedIndex)
    

    useEffect(() => {
        //console.log('INDEX LIST REF',indexListRef)
        const findRef = indexListRef.current.filter((obj: any) => obj.homeId === selected?.PropertyId)
        if(findRef) {
            const idx: number[] = findRef.map((ref: any) => {
                const num: number = ref.ind
                return num
            })
            //console.log('Selected FINDREFFF---->>>', findRef)
            const curRef = refs.current.find((ref: any, index: number) => index === idx[0] )
            //console.log("CURRENT REF TO HIGLIGHT ===>>>", curRef) 
            curRef?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
        }
    }, [selected])

   

    return (
        <div style={{width: '100%',height: '100vh', overflow: 'scroll'}} >
            {homes.map((home: H, index: number) => {
                // set the list of indexes for the refs
                let selectedHome = false
                const listCheck = indexListRef.current.find((ref: any) => ref.homeId === home.PropertyId)
                if(listCheck == undefined){
                    indexListRef.current.push({homeId: home.PropertyId, ind: index})
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
