import "./products.css";
import ProductCard from "./product-card";
const toolInfo = require("../products/tools.json");

const Products = (props) => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="product-section">
        {toolInfo.map((tool) => (
          <ProductCard tool={tool} key={tool.id} addToCart={props.addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
