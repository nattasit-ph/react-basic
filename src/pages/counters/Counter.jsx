import React, { useEffect, useState } from 'react'
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  // set default เมื่อ load component เสร็จ [ทำเมื่อ load เสร็จแค่คั้งเดียว] [มักใช้ call api หลัง load component เสร็จ]
  // กรณีใช้ class (แบบเก่า) มี function 2 แบบ componentDidMount and componentDidUpdate อย่างใดอย่างหนึ่ง
  useEffect(() => {
    setCounter(0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-3">
          <h1>Couter: { counter }</h1>
          <button className='btn btn-primary m-1' onClick={ () => { setCounter(counter+1); } }>Count Up</button>
          <button className='btn btn-primary m-1' onClick={ () => { setCounter(counter-1); } }>Count Down</button>
      </div>
      <Footer />
    </>
  )
}

export default Counter