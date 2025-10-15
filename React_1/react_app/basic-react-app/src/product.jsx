import "./Product.css";
function Product({ title, price }) {
  // const list = features.map((feature, index) => <li key={index}>{feature}</li>);
  // console.log(features)
  // console.log(props.title);
//   if (price > 30000) {
    return (
      <div className="Product">
        <h1>{title}</h1>
        <h3>Price : {price}</h3>
        {price > 30000 ? <p>Discount of 5%</p> : <a href="#">No Discount</a>}
        {/* <p>Features : {list}</p> */}
        {/* <p>Features2 : {features2}</p> */}
      </div>
    );
}
//   } else {
//     return (
//       <div className="Product">
//         <h1>{title}</h1>
//         <h3>Price : {price}</h3>
//         {/* <h3 style={{color:"red"}}>Not Available</h3> */}
//         {/* <p>Features : {list}</p> */}
//         {/* <p>Features2 : {features2}</p> */}
//       </div>
//     );
//   }

export default Product;
