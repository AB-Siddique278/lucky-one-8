import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product_info from '../Product/Product_info';
import './Shop.css'


import './Shop.css'
const Shop = () => {

    const [products, setProducts]= useState([]);
    const [cart, setCart]=useState([])
    useEffect(()=>{

        fetch('data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    
        },[]);
        
    const handleaddtocard = (product)=>{
            console.log(product);
            const newCart = [...cart, product];
            setCart(newCart)

        }




    return (
        <div className='shop'>
            <div className='products-container'>
                
                {
                    products.map(product=><Product_info
                    key={product.id}

                    product={product}

                    handleaddtocard={handleaddtocard}
                    
                    ></Product_info>)
                }

                
            </div>

            <div className='product-summery'>

               
            <Cart
           cart={cart}

            ></Cart>
            </div>
        </div>
    );
};

export default Shop;