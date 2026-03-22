import Product from "./Product.jsx";

function ProductTab() {
    return (
        <>
            <Product title="phone" price={20000} />
            <Product title="laptop" price={50000} />
        </>
    );
}

export default ProductTab;