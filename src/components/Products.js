import React from 'react'

function Products(props){
    const {product, onAdd} = props;
    return(
         <div className="product">
             <img src={product.image} alt="img" className="product_img"/>
             <h4 className="product_name">{product.name}</h4>
             <p className="product_price">${product.price}</p>
             <div className="product_btn">
                 <button className="add_btn" onClick={() => onAdd(product)}>add to cart</button>
             </div>
         </div>
    )
}

export default Products;