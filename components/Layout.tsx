import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {


  return (
  <> 
  <Navbar />
  <div>
    {children}
  </div>
  <Footer />
  </>

  )
}


export default Layout;
