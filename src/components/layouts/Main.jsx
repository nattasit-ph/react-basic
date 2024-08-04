import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

const Main = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="container">
            {children}
        </div>
        <Footer />
    </>
  )
}

export default Main