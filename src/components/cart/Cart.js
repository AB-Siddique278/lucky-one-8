import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    
    // var randomItem = product[Math.floor(Math.random()*product.length)];
    

    return (
        <div className='cart'>
                <h1>Select your Book</h1>
                <p>Select item Length: {cart.length} </p>

            <div>
                {
                    cart.map(item=><h4><li>{item.name} </li></h4>)
                }
                
                
            </div>
            

               
        </div>
    );
};

export default Cart;