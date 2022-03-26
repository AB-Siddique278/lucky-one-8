import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
   
    // var randomItem = product[Math.floor(Math.random()*product.length)];
  
    // let btnRandom = document.getElementById('buttonv');
    // let result = document.getElementById('result');


    
    // function getRandomNumber(min, max) {
    //     let step1 = max - min + 1;
    //     let step2 = Math.random() * step1;
    //     let result = Math.floor(step2) + min;
    //     return result;
    // }

    // btnRandom.addEventListener('click', () => {
    //     let index = getRandomNumber(0, cart.length-1);
    //     result.innerText = cart[index];
    // });


    return (
        <div className='cart'>
                <h1>Select your Book</h1>
                <p>Select item Length: {cart.length} </p>

            <div>
                {
                    cart.map(item=><h4><li>{item.name}</li></h4>)
                }
                
                <div>

                   
                    <button className=" buttonv btn btn-primary">
                        Choose For me
                    </button>

                    <h1 className='result'>
                        dfdfd
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