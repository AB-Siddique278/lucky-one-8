import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    // let itemname
    // for(const product of cart){
    //     itemname = product.name;
    // }


    return (
        <div className='cart'>
                <h1>Select your Book</h1>
                <p>Select item Length: {cart.length} </p>
               
        </div>
    );
};

export default Cart;