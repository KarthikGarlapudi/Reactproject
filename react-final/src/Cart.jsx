import { useDispatch, useSelector } from "react-redux"
import { decreament, deletefromcart, increament } from "./store";
import { useRef, useState } from "react";
import './Cart.css';


function Cart(){
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.cart);
    const total=cart.reduce((sum,item)=>sum+(item.price*item.quantity), 0)
    const couponref=useRef(null);
    const code=['KARTHIK10','KARTHIK20','KARTHIK30'];
    const product=cart.map((product, index)=>
        <li key={index}>
             {product.name} - ${product.price.toFixed(2)} - {product.quantity}&nbsp;&nbsp;
             <button onClick={()=>dispatch(increament(product))}>+</button>&nbsp;&nbsp;
             <button onClick={()=>dispatch(decreament(product))}>-</button>&nbsp;&nbsp;
             <button onClick={()=>dispatch(deletefromcart(product))}>removeitem</button>
        </li>
        )
        const [discountMsg, setdiscountMsg]=useState(null);
        const [discout, setdisount]=useState(0);
        const [couponMsg, setCouponMsg]=useState(null);
        const [couponcode,setCouponCode]=useState(0);
        
/*
const [discounntper,setDiscounntPer]=useState(0);

const Discountcal=(dis)=>{
    setDiscounntPer(dis);
    }

const calculatetotal=()=>{
    const distamt=total*(discounntper/100);

    const netamt=total-distamt;


    return (distamt : parseInt(distamt.toFixed(2)),
    netamt : parseInt(netamt.toFixed(2)))
    }
const {distamt,netamt}=calculatetotal();
*/
        const Discount=(dis)=>{
            switch(dis) {
                case 10:setdisount(total*0.1);
                setdiscountMsg('10% discount applied');
                break;

                case 20: setdisount(total*0.2);
                setdiscountMsg('20% discount applied');
                break;
                
                case 30:setdisount(total*0.3);
                setdiscountMsg('30% discount applied');
                break;

                default:setdisount(0);
                break;
            }

        }
        const applycoupon=()=> {
           const status=code.find(codes=>codes === couponref.current.value);

           if(status)
            {
                switch(couponref.current.value)
                {
                    case 'KARTHIK10' : setCouponCode(total*0.1);
                    break;

                    case 'KARTHIK20' : setCouponCode(total*0.2);
                    break;

                    case 'KARTHIK30' : setCouponCode(total*0.3);
                    break;

                    default:setCouponCode(0);
                    break;
                }
                setCouponMsg("'"+couponref.current.value+"'"+ " Applied!");
            } 
            else{
                setCouponMsg("Invalid coupon code")
            }
        }

        const netamt=total-couponcode-discout;
    return(
        <>
        
        {cart.length===0?(<h2>Cart is empty!</h2>) :
        (
        <>
        <h2>Cart</h2>
        <p>{product}</p>
        <p>Total bill : {total}</p>
        <button onClick={()=>Discount(10)}>10% Discount</button>&emsp;
        <button onClick={()=>Discount(20)}>20% Discount</button>&emsp;
        <button onClick={()=>Discount(30)}>30% Discount</button>&emsp;
        <p>{discountMsg}</p>
        <p>Discount amount : {discout}</p>
        
        <p>Enter the coupon code : <input type="text" ref={couponref} placeholder="Enter coupon code"/></p>
        <button onClick={applycoupon}>Apply</button>
        <p>{couponMsg}</p>
        <p>Coupon code discount : {couponcode}</p>
        <p>Total Bill:{netamt}</p>
        <p><button>Complete order</button></p>
        
        </>)}
        </>
        
    )
}
export default Cart