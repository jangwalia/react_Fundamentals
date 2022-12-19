import Orders from "./Orders";
import OrderSummary from "../_mocks_/orderData";
function OrderList() {
  return (
    <section className="OrderList">
      <h1>Current Orders</h1>
      {OrderSummary.map((eachOrder, index) => (
        <Orders
          key={index}
          number={eachOrder.orderNumber}
          products={eachOrder.Product}
          savedMoney={eachOrder.customerSaved}
        />
      ))}
    </section>
  );
}
export default OrderList;
