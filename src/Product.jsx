function Product({title,price}){
    return (
        <div className="product">
            <h1>{title}</h1>
            <h3>{price}</h3>
        </div>
    );
}
export default Product