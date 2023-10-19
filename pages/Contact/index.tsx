/* eslint-disable @next/next/no-img-element */

import Head from "next/head"

import styles from '../../styles/Contact.module.css'

const Contact = () => {
    
  
  return (
    <div>
      <Head>
        <title>
          Contact
        </title>
      </Head>
      <div style={{height: '100%'}}>
        <h2 style={{textAlign: 'center'}}>
            <u>Office</u>
        </h2>
        <h4 style={{textAlign: 'center', margin: '10px'}}>
            816-297-1001
        </h4>
        <h4 style={{textAlign: 'center', margin: '10px'}}>
            47 E Main St. Adrian MO, 64720 
        </h4>
        <br/>
        <br/>
        <h2 style={{textAlign: 'center'}}><u>Realtors</u></h2>
        <div className={styles.CardDiv}>
            <div className={styles.ContactCard}>
                <img style={{borderRadius: '90px'}} src="https://res.cloudinary.com/dq6yyefdy/image/upload/w_150,h_150,c_fill,g_face,r_max/v1676740975/1homeland_reality-8_rhxnde.jpg" alt="E Tindle" />
                <div className={styles.CCinfo}>
                    <p>Ella Tindle</p>
                    <p>816-225-4500</p>
                    <p>ellastark@sbcglobal.net</p>
                </div>
            </div>
            <div className={styles.ContactCard}>
                <img  style={{borderRadius: '90px'}} src="https://res.cloudinary.com/dq6yyefdy/image/upload/w_150,h_150,c_fill,g_face,r_max/v1676740974/1homeland_reality-49_oftiri.jpg" alt="B Johnson" />
                <div className={styles.CCinfo}>
                    <p>Ben Johnson</p>
                    <p>417-298-7678</p>
                    <p>benjaminljohnson@yahoo.com</p>
                </div>
            </div>
            <div className={styles.ContactCard}>
                <img style={{borderRadius: '90px'}} src="https://res.cloudinary.com/dq6yyefdy/image/upload/w_150,h_150,c_fill,g_face,r_max/v1676740978/1homeland_reality-50_b5rbxx.jpg" alt="J Langley" />
                <div className={styles.CCinfo}>
                    <p>James W. Langley</p>
                    <p>816-590-5259</p>
                    <p>james.w.langley@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
 


    </div>
  )
}

export default Contact;
