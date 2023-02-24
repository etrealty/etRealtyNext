import Head from "next/head";


const About = () => {
  return (
   <div>
    <Head>
      <title>About</title>
    </Head>
    <div style={{minHeight: '200%' ,textAlign: 'center'}}>
      <h1>About Page</h1>
      <img height={300} width={200} style={{borderRadius: '16px'}} src="https://res.cloudinary.com/dq6yyefdy/image/upload/v1676740978/homeland_reality-20_cvjkez.jpg" alt="realty team" />
      <div style={{border: '2px solid black',borderRadius: '20px',margin: '40px',background: '#6f8e70'}}>
          <p>ETrealty is here to help you find your new home, or sell your current home. We will provide you with the knowledge and skills you need for a succesfull real estate experience</p>
          <p> We pride ourselves in offering the best realty related experience around. </p>
          <p>Your satisfaction is our mission. Thanks for taking the time to visit our website.</p>
          <p>We hope to hear from you soon!</p>
      </div> 
    </div>
   </div>
  )
}
export default About;
