import React from 'react'

function Header(props){
    const {countCartItems} = props;
    return(
        <div className="header container-fluid">
            <h2>Shopping Cart</h2>
            <div className="header_div">
                <p className="cart">Cart{' '}
                {
                    countCartItems ? <span className="cart_num">{countCartItems}</span> : ' '
                }</p>
                <a href="#">Sign In</a>
            </div>
        </div>
    );
}

export default Header;