import Product from "./Product";
import ProductArray from "../helper/productArrayConverter";
import productData from "../_mocks_/productData";
let arrayResponse = ProductArray(productData);
function ProductList() {
  return (
    <section className="ProductList">
      <h1>Current Products</h1>
      {arrayResponse.map((eachProduct, index) => (
        <Product
          key={index}
          id={eachProduct.productId}
          productName={eachProduct.productName}
          type={eachProduct.type}
          discount={eachProduct.discount}
        />
      ))}
    </section>
  );
}
export default ProductList;
