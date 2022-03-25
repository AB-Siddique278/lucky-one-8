import React from 'react';
import './Product_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product_info = (props) => {
    console.log(props.product)

    const {id, name, price, picture}= props.product
    const {handleaddtocard}=props;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>
                Name: {name}
            </h3>
            <h4>
                Price:$ {price}
            </h4>
            <button onClick={ ()=>props.handleaddtocard(props.product)} className='cart-button'>
                <p className='button-name'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product_info;