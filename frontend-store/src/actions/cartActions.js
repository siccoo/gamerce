import Axios from "axios"
import { CART_ADD_ITEM } from "../constant/cartConstant";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            price: data.price,
            image: data.image,
            countInStock: data.countInStock,
            product: data._id,
            qty
        }
    })
}