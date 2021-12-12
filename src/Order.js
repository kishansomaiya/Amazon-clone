import React from 'react';
import './Order.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';



function Order() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='order'>
           <div className='order__container'>
                <h1>Your Order items</h1>
                <div className='order__section'>
                    <div className='order__title'>
                    <h3>Your Order Id</h3>
                    </div>
                    <div className='order__Id'>
                        <h2>{Math.floor(Math.random()*1000000000 + 1)}</h2>
                    </div>

                </div>
                <div className='order__section'>
                    <div className='order__title'>
                         <h3>Your Items</h3>
                    </div>
                    <div className='order__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ) )}
                    </div>
                </div>
                <div className='order__section h1'>
                    <h1>Thank You For Your Order</h1>
                </div>
           </div>
        </div>
    )
}

export default Order;
