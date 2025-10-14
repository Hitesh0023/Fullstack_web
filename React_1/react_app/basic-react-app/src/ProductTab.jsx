import Product from "./product.jsx";

function ProductTab(){
    let features = ["Good Camera", "Long Battery Life", "Fast Processor"];
    let features2 = ["Warranty","EMI","Service"]
    return (
        <>
        <Product title="Phone" price={60000/2} features={features} features2={features2} />
        <Product title="Tablet" price={40000} features={features} features2={"gift"} />
        <Product title="Laptop" price={85000} features={features} />
        </>
    );
}
export default ProductTab;