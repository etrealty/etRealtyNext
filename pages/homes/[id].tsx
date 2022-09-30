import { returnSingleHome } from "../../utils/returnSingleHome";
import {InferGetServerSidePropsType, NextPage } from 'next'



const HomeInfo = ({ home }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(home)


    return (
        <div>
            <p>single home info check console </p>

        </div>
    )

}

export default HomeInfo;


export const getServerSideProps = async (context: any) => {
    if(context.params == undefined) return
    const { id } = context.params
    const home = await returnSingleHome(id)
    if(home === undefined){
        return
    }
    return {
            props: { home }
        }  

}
