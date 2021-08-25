import "./product-card.css";

const ProductCard = (props) => {
  const { id, name, description, price, image } = props.tool;
  return (
    <div className="product-card" id={id}>
      <img className="tool-image" src={image} alt={name} />
      <h3 className="tool-name">{name}</h3>
      <p className="description">{description}</p>
      <div className="bottom-section">
        <p className="price">${price.toFixed(2)}</p>
        <button id={id} className="buy-button" onClick={props.addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
