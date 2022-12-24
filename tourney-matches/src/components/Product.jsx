function Product({ productName, type, discount, id }) {
  return (
    <article className="Product">
      <h1>Product Id {id}</h1>
      <h2>The Product is called...{productName}</h2>
      <span>---from {type} category</span>

      {!discount ? (
        <h2 className="zero">Currently There is no discount</h2>
      ) : (
        <h2>Currently offers Discount</h2>
      )}
    </article>
  );
}
export default Product;
