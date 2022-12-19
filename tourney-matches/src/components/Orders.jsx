function Orders({ number, products, savedMoney }) {
  return (
    <article className="Orders">
      <h1>The order number is {number}</h1>
      <h2>The Products in the orders are</h2>
      <ul>
        {products.map((eachProduct, index) => (
          <li key={index}>{eachProduct}</li>
        ))}
      </ul>
      {savedMoney === 0 ? (
        <h2 className="zero">Customer Saved no money in this order</h2>
      ) : (
        <h2>Customer saved {savedMoney} dollars in this order</h2>
      )}
    </article>
  );
}
export default Orders;
