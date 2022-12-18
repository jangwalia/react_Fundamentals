function Product() {
  return (
    <article className="Product">
      <h1>
        Product<span>XXX</span>YYY
      </h1>
      {/* To be shown when there is no wins */}
      <h2 className="zero">Currently There is no discount</h2>
      {/* To be shown when there is 1 win */}
      <h2>Currently offers Discount</h2>
      {/* To be shown when there is more than one win */}
      <h2>Customer saved 100 dollars</h2>
    </article>
  );
}
export default Product;
