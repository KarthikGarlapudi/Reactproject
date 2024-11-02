import { useDispatch, useSelector } from "react-redux"
import { addtocart } from "./store";

function Nonveg() {
    const nonvegproducts = useSelector(state => state.products.nonveg)
    const dispatch=useDispatch();
    const items = nonvegproducts.map((product, index) =>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}&nbsp;&nbsp;
            <button onClick={()=>dispatch(addtocart(product))}>Add to cart</button>
        </li>
    )
    return (
        <>
            <h2>Non-Veg Products</h2>
            <ul>
                {items}
            </ul>
        </>

    )
}
export default Nonveg