const getName = (orderArray, ProductArray) => {
  return orderArray.map((product) => {
    for (let order of ProductArray) {
      if (
        product.Product.includes(order.productId) &&
        order.productName !== "undefined"
      ) {
        product.Name = order.productName;
      }
    }
    return product;
  });
};
export default getName;
