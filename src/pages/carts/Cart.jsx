import React from 'react'
import CartItem from './CartItem'
import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'

const products = [
  {'name': 'orange', 'price': 8, 'qty': 11}, 
  {'name': 'water malon', 'price': 40, 'qty': 4}, 
  {'name': 'strawberry', 'price': 5, 'qty': 50}, 
];

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-2">
            <CartItem name="apple" price="15" qty="8" />
          </div>
          <div className="col-md-4 my-2">
            <CartItem name="banana" price="30" qty="2" />
          </div>
          <div className="col-md-4 my-2">
            <CartItem name="mango" price="20" qty="9" />
          </div>
        </div>
        <div className="row">
          {
            products.map((item, index) => (
              <div className="col-md-4 my-2" key={index}>
                <CartItem name={ item.name } price={ item.price } qty={ item.qty } />
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart