function Product() {
  return (
    <article className="Product">
      <h1>Product Id #shddsjsdhs</h1>
      <h2>The Product is called...name</h2>
      <span>---from furniture category</span>
      {/* To be shown when there is no discount */}

      <h2 className="zero">Currently There is no discount</h2>
      {/* To be shown when there is 1 win */}
      <h2>Currently offers Discount</h2>
      {/* To be shown when there is more than one win */}
      <h2>Customer saved 100 dollars</h2>
    </article>
  );
}
export default Product;
