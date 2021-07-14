import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../component/Product";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios("/api/products");
            setProducts(data);
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
