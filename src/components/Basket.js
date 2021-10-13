import React from 'react'

function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <aside className="basket">
           <h2>Cart Items</h2>
           <div className="basket_div">
               <div>{cartItems.length === 0 && <h4>Cart Is Empty</h4>}</div>
               {cartItems.map((item) =>(
                      <div className="basket_item" key={item.id}>
                         <div className="item_name">{item.name}</div>
                         <div className="basket_btn">
                             <button className="added_btn" onClick={() =>onAdd(item)}>+</button>
                             <button className="remove_btn" onClick={() =>onRemove(item)}>-</button>
                         </div>
                         <div className="basket_price">
                             <div>{item.qty} x {item.price.toFixed(2)}</div>
                         </div>
                     </div>
               ))}       
               
           </div>
           {
               cartItems.length !== 0 && (
                   <>
                    <hr></hr>
                    <div className="total_price total">
                        <div>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="total_price">
                        <div>Tax Price</div>
                        <div>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="total_price">
                        <div>Shipping Price</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="total_price">
                        <div><strong>Total Price</strong></div>
                        <div>$<strong>{totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <div className="checkout_btn">
                        <button>CheckOut</button>
                   </div>
                   </>
                   
               )
           }
           
        </aside>
    )
}

export default Basket;