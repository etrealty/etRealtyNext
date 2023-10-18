import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
   <div>
    <Head>
      <title>About</title>
    </Head>
    <div style={{minHeight: '100%' ,textAlign: 'center'}}>
      <h1>About Page</h1>
      <Image height={300} width={200} style={{boxShadow: 'grey 8px 8px 2px 2px', borderRadius: '16px'}} src="https://res.cloudinary.com/dq6yyefdy/image/upload/v1676740978/homeland_reality-20_cvjkez.jpg" alt="realty team" />
      <div style={{boxShadow: 'grey 8px 8px 2px 2px',border: '2px solid black',borderRadius: '20px',margin: '40px',background: '#6f8e70', marginBottom: '400px'}}>
          <p>Homeland Realty is here to help you find your new home, or sell your current home. We will provide you with the knowledge and skills you need for a succesfull real estate experience.</p>
          <p> We pride ourselves in offering the best realty related experience around. </p>
          <p>Your satisfaction is our mission. Thanks for taking the time to visit our website.</p>
          <p>We hope to hear from you soon!</p>
      </div> 
    </div>
   </div>
  )
}
export default About;
