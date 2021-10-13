import React from 'react'
import Products from './Products'

function Main(props){
    const {products, onAdd} = props;
    
    return(
        <div className="main">
            <h2>Products</h2>
            <div className="main_row">
                {
                    products.map((product) => {
                        return(
                            <div className="main_col" key={product.id}>
                               <Products  product={product} onAdd={onAdd}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main;