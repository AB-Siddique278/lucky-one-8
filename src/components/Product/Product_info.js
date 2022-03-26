import React from 'react';
import './Product_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product_info = (props) => {
    // console.log(props.product)

    const {id, name, price, picture}= props.product
    const {handleaddtocard}=props;
    return (
        <div className='col-md-4' >
            <div>
                <div className='product col'>
                <div class="card mt-3">
                <img src={picture} alt="" />
                <div class="card-body">
                <h5 class="card-title">
                    Name: {name}
                </h5>
                <h5>
                    Price:$ {price}
                </h5>
                </div>
                
                <div className='mx-auto w-100 '>
                    <button onClick={ ()=>props.handleaddtocard(props.product)} className='cart-button btn btn-primary d-flex w-100 justify-content-center'>
                        <p className='button-name'>Add to Cart</p>
                        <p><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></p>
                    </button>
                </div>



                </div>

                </div>
            </div>
        </div>
    );
};

export default Product_info;