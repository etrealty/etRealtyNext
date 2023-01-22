import Head from "next/head";
import { fetchHomesDefault } from '../utils/fetchHomesDefault';
import { returnSingleHome } from '../utils/fetchSingleHome';
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { type H } from '../utils/houseType'

const Test = ({ house }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(house);

  return (
   <div>
    <Head>
      <title>Test</title>
    </Head>
    <div style={{height: '100vh', textAlign: 'center'}}>
      <h1>Test Page</h1>
      <p>ETrealty is here to help you find your new home, or sell your current home. We will provide you with the knowledge and skills you need for a succesfull real estate experience</p>
      <p> We pride ourselves in offering the best hometown realtor experience in Bates County.</p>
    </div>
   </div>
  )
}
export default Test;


export const getServerSideProps: GetServerSideProps<{ house: H }> = async () => {
    // const houses: H[] = await fetchHomesDefault() 

    const id = "8362389149"
    const house: H = await returnSingleHome(id);

    return {
        props: {
            //houses,
            house
        }
    }
}
