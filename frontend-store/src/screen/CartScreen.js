const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    return (
        <div>
            <h3>Cart Screen</h3>
            <p>Add To Cart : ProductId: {productId} Qty: {qty}</p>
        </div>
    )
}

export default CartScreen;
