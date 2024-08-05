import React from 'react'

const CartItem = (item) => {
  return (
      <div className="card" style={{'width': '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price.: {item.price}</p>
          <p className="card-text">Qty.: {item.qty}</p>
        </div>
      </div>
  )
  
  
}

export default CartItem