import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { addtocart } from './store';
function Veg(){
    const vegproducts = useSelector(state => state.products.veg)
    const dispatch = useDispatch();
         const items=vegproducts.map((product,index)=>
         <li key={index}>
            {product.name} - ${product.price.toFixed(2)}&nbsp;&nbsp;
            
            <button onClick={()=>dispatch(addtocart(product))}>Add to cart</button>
         </li>
         )
    return(
        <>
         <h2>Veg Products</h2>
         <ul>
            {items}
         </ul>
        </>
    );
}
export default Veg;