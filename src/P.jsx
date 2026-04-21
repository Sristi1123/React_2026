import "./P.css";
// import "./Ptab.jsx";
function P({title, price, features, specialFeatures, option}) {
    // const list = features.map((feature) => <li>{feature}</li>);
    let isDiscount = price > 1500 ?"5%":"0%";
    if(price>1500){
        return (<div className="product">
            <h1>"{title}"</h1>
            <h3>Price: {price}</h3>
            <p>{isDiscount}</p>
        </div>); 
    }else{
        return (<div className="product">
            <h3>Price: {price}</h3>
        </div>);
    }
    // return (
    //     <div className="product">
    //         <h1>"{title}"</h1>
    //         <h3>Price: {price}</h3>
    //         <p>Features:{features}</p>
    //         <p>SpecialFeature:{specialFeatures.a}</p>
    //         <p>Options:{option}</p>
    //         <p>{features.map((feature) => <li>{feature}</li>)}</p>
    //     </div>
    // );
}
 
export default P;