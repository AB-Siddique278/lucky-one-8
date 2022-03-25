import React, { useEffect, useState } from 'react';
import Product_info from '../Product/Product_info';
import './Shop.css'


import './Shop.css'
const Shop = () => {

    const [products, setProducts]= useState([]);
    useEffect(()=>{

        fetch('data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    
        },[]);
    return (
        <div className='shop'>
            <div className='products-container'>
                
                {
                    products.map(product=><Product_info
                    key={product.id}

                    product={product}
                    
                    ></Product_info>)
                }

                
            </div>

            <div className='product-summery'>
                <h2>this is for summery</h2>
            </div>
        </div>
    );
};

export default Shop;