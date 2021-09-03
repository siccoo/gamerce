import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import MessageBox from "../component/MessageBox";

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const cart =  useSelector(state => state.cart);
    const {cartItems} = cart;

    useEffect(() => {
       if(productId) {
        dispatch(addToCart(productId, qty));
       } 
    }, [dispatch, productId, qty])
    
    const removeFromHandler = () => {

    } 
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? 
                    <MessageBox>Cart is Empty
                        <Link to="/">Go Shopping</Link>
                    </MessageBox> : (
                        <ul>
                            {
                                cartItems.map((item) => (
                                    <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="small">
                                                </img>
                                            </div>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                            <select 
                                                value={item.qty} 
                                                onChange={e => dispatch(addToCart(item.product), 
                                                Number(e.target.value))}>
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))}
                                            </select>
                                        </div>
                                        <div>
                                            ₦{item.price}
                                        </div>
                                        <div>
                                            <button 
                                                type="submit" 
                                                onClick={() => removeFromHandler(item.product)}>
                                                    Delete
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card__body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((accumulator, current) => accumulator + current.qty, 0)} items) : ₦{cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button
                                type="submit"
                                onClick={checkOutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}>
                                    Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // <div>
        //     <h3>Cart Screen</h3>
        //     <p>Add To Cart : ProductId: {productId} Qty: {qty}</p>
        // </div>
    )
}

export default CartScreen;
