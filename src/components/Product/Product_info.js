import React from 'react';
import './Product_info.css'

const Product_info = (props) => {
    console.log(props.product)

    const {id, name, price, picture}= props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            
        </div>
    );
};

export default Product_info;