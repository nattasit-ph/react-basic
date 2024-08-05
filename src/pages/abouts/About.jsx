import Footer from '../../components/shared/Footer'
import Navbar from '../../components/shared/Navbar'
import './About.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='About container'>
          <h1>About page</h1>
          <p className="myStyle">รายละเอียดเนื้อหา ของระบบ มีอะไรเกี่ยวกับอะไรบ้าง</p>
      </div>
      <Footer />
    </>
    
  )
}

export default About