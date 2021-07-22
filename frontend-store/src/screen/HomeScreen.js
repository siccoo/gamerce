import { useEffect } from "react";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import Product from "../component/Product";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? 
                (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (<div className="row center">
                    {products.map((product) => (
                    <Product key={product._id} product={product} />
                    ))}
                </div>)
            }
        </div>
    )
}

export default HomeScreen;
