import "./App.css";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
import OrderSummary from "../_mocks_/orderData";
import productData from "../_mocks_/productData";
import ProductArray from "../helper/productArrayConverter";
import getName from "../helper/productName";
let listOfProducts = ProductArray(productData);
let productNames = getName(OrderSummary, listOfProducts);
let arrayResponse = ProductArray(productData);
function App() {
  return (
    <>
      <h1>Welcome to our online store portal</h1>
      <ProductList arrayResponse={arrayResponse} />
      <OrderList productNames={productNames} />
    </>
  );
}
export default App;
