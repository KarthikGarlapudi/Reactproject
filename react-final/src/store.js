import { configureStore,createSlice } from "@reduxjs/toolkit";
const productslice=createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:'Tomato',price:80.50},
            {name:'Potato',price:60.00},
            {name:'brinjal',price:97.00},
            {name:'Carrot',price:105.00},
            {name:'Beetroot',price:110.00},
            {name:'Sweetpotato',price:50.50}
        ],
        nonveg:[
            {name:'Chicken',price:250.00},
            {name:'Mutton',price:800.00},
            {name:'Fish',price:300.00},
            {name:'Prawns',price:600.00},
            {name:'Eggs',price:50}
        ],
    },
    reducers:{}
});

const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart : (state,action) => {
            const status=state.find(item=>item.name === action.payload.name);
            if(status)
            {
                status.quantity += 1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
       decreament : (state,action) => {
        const status1 = state.find(item=>item.name === action.payload.name);
            if(status1)
            {
              if(status1.quantity === 1)
              {
                return state.filter(item=>item.name!=action.payload.name)
              }
              else{
                status1.quantity -=1;
              }
            }     
       },
       deletefromcart : (state,action) => {
        return state.filter(product=>product.name!=action.payload.name);
       } ,
       increament : (state,action) => {
        const cartitems=state.find(product=>product.name===action.payload.name);
        if(cartitems)
        {
          cartitems.quantity+=1;
        }
       }   

    }
});
export const {addtocart,decreament,deletefromcart,increament} = cartslice.actions;
const store=configureStore({
    reducer:{products:productslice.reducer,  
            cart:cartslice.reducer}    
});

export default store;