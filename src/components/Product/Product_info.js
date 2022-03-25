import React from 'react';
import './Product_info.css'

const Product_info = (props) => {
    console.log(props.product)

    const handleaddtocard = ()=>{
            
    }

    const {id, name, price, picture}= props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>
                Name: {name}
            </h3>
            <h4>
                Price:$ {price}
            </h4>
            <button onClick={handleaddtocard} className='cart-button'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product_info;