import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {


  return (
  <> 
  <div className={styles.mainBody}>
      <Navbar />
      <div>
        {children}
      </div>
  </div> 
  <Footer />
  </>

  )
}


export default Layout;
