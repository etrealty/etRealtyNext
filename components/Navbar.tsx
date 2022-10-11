import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import { GiFamilyHouse } from 'react-icons/gi'

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoDiv}>
        <Link href='/'>
          <div style={{display: 'flex'}}>
          <GiFamilyHouse style={{fontSize: '48px'}} />
          <p style={{fontSize: '12px'}}>Homeland Realty</p>
          </div>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href='/homesearch' ><span className={styles.link}>Search</span></Link>
        <Link href='/homes' ><span className={styles.link}>Homes</span></Link>
        <Link href='/about'><span className={styles.link}>About</span></Link>
        <Link href='/contact' ><span className={styles.link}>Contact</span></Link>
      </div>
    </nav>
  )
}

export default Navbar;
