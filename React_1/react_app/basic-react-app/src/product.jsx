import "./Product.css";
function Product({title, price , features , features2}) {
    console.log(features)
    // console.log(props.title);
    return (
    <div className="Product">
        <h1>{title}</h1>
        <h3>Price : {price}</h3>
        <p>Features : {features}</p>
        <p>Features2 : {features2}</p>
    </div>
    );
}
export default Product;