import React from 'react';
import { data } from '../data';
import Rating from "../component/Rating";

const ProductScreen = (props) => {
    const product = data.products.find((x) => x._id === props.match.params.id );
    if(!product) {
        return <div>Product Not Found</div>;
    }
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews} />
                        </li>
                        <li>Price: ₦{product.price}</li>
                        <li>Description {product.description}</li>
                    </ul>
                </div>
                <div className="col-1">

                </div>
            </div>
        </div>
    )
}

export default ProductScreen
