import Head from "next/head"

const Contact = () => {
  
  
  
  
  return (
    <div>
      <Head>
        <title>
          Contact
        </title>
      </Head>
      <div style={{height: '100vh'}}>
        <h1 style={{textAlign: 'center'}}>Contact Info</h1>
        <h3 style={{textAlign: 'center'}}>
            <u>Office</u>
        </h3>
        <h3 style={{textAlign: 'center'}}>
            816-297-1001
        </h3>
        <h3 style={{textAlign: 'center'}}>
            47 E Main St. Adrian MO, 64720 
        </h3>
        <br/>
        <br/>
        <h2 style={{textAlign: 'center'}}><u>Realtors</u></h2>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div>
                <p>Ella Tindle</p>
                <p>816-225-4500</p>
                <p>ellastark@sbcglobal.net</p>
            </div>
            <div>
                <p>Ben Johnson</p>
                <p>417-298-7678</p>
                <p>benjaminljohnson@yahoo.com</p>
            </div>
            <div>
                <p>James W. Langley</p>
                <p>816-590-5259</p>
                <p>james.w.langley@gmail.com</p>
            </div>
        </div>
      </div>



    </div>
  )
}

export default Contact;
