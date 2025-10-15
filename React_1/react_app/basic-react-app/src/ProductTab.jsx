import Product from "./product.jsx";

function ProductTab(){
    // let features = [<li>"Good Camera"</li>, <li>"Long Battery Life"</li>, <li>"Fast Processor"</li>];
    // let features2 = ["Warranty","EMI","Service"]
    return (
        <>
        <Product title="Phone" price={60000/2}  />
        <Product title="Tablet" price={40000}  />
        <Product title="Laptop" price={85000}  />
        </>
    );
}
export default ProductTab;