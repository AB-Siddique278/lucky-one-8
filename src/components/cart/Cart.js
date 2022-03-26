import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)

    let items =cart;
    function choiseOne(){
        return Math.floor(Math.random()* items.length)
    }

    const random = choiseOne();
 
    return (
        <div className='cart'>
                <h1>Select your Book</h1>
                <p>Number of select your Item: {cart.length} </p>

            <div>
                {
                    cart.map(item=><h4><li>{item.name}</li></h4>)
                }
                
                <div>

                   
                    <button onClick="choiseOne()" className=" buttonv btn btn-primary">
                        Choose For me
                    </button>

                    <h1 className='result'>
                        {random}
                    </h1>
                    <br/>

                    <button className="btn btn-primary">
                        Clear
                    </button>

                    
                </div>
                
            </div>
            
            

               
        </div>
    );
};

export default Cart;