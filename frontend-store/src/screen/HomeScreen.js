import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../component/Product";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios("/api/products");
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
        <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
    )
}

export default HomeScreen;
