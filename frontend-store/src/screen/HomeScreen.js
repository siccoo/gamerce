import { useEffect, useState } from "react";
import Axios from "axios";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import Product from "../component/Product";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await Axios("/api/products");
                setLoading(false);
                setProducts(data);
            } catch(err) {
                setError(err.message);
                setLoading(false)
            } 
        };
        fetchData();
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
