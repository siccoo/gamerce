import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
        // Getting all products in the payload in items    
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.product === item.product);
        if (existItem) {
            return {
                ...state,
                cartItems: state.cartItems.map((x) => x.product === existItem.product ? item: x),
            };
        } else {
            return { ...state, cartItems: [...state.cartItems, item] // This code concatenates the cartItems to new items  
            };
        } 
        // Removing individual items in the state
        case CART_REMOVE_ITEM:
            return {  ...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload ),
            };
        default: return state;
    }
};