import Orders from "./Orders";
function OrderList({ productNames }) {
  return (
    <section className="OrderList">
      <h1>Current Orders</h1>
      {productNames.map((eachOrder, index) => (
        <Orders
          key={index}
          number={eachOrder.orderNumber}
          products={eachOrder.Name}
          savedMoney={eachOrder.customerSaved}
        />
      ))}
    </section>
  );
}
export default OrderList;
