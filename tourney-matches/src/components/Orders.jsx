function Orders() {
  return (
    <article className="Orders">
      <h1>
        Product<span>XXX</span>YYY
      </h1>
      {/* To be shown when there is no discount */}
      <h2 className="zero">Customer Saved no money in this order</h2>
      {/* To be shown when there is saving */}
      <h2>Customer saved 100 dollars in this order</h2>
    </article>
  );
}
export default Orders;
