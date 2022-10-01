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
          <p style={{fontSize: '12px'}}>ET Realty</p>
          </div>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href='/homesearch' >Search</Link>
        <Link href='/homes' >Homes</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact' >Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
