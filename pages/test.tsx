import Head from "next/head";
import { fetchHomesDefault } from '../utils/fetchHomesDefault';
import { GetServerSideProps } from 'next'

const Test = ({homes}: any) => {
  console.log(homes); 


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


export const getServerSideProps: GetServerSideProps = async () => {
    const houses = await fetchHomesDefault() 


    return {
        props: {
            homes: houses
        }
    }
}
