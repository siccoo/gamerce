import { data } from "../data";
import Product from "../component/Product";

const HomeScreen = () => {
    return (
        <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
    )
}

export default HomeScreen;
