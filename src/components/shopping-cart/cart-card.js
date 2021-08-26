import "./cart-card.css";
const toolInfo = require("../products/tools.json");

const CartCard = (props) => {
  const partNumber = props.partNumber;
  const quantity = props.quantity;
  const itemInfo = toolInfo.filter((item) => item.id === partNumber);
  const { id, name, price, image } = itemInfo[0];
  return (
    <div className="cart-card" id={id}>
      <div className="cart-image">
        <img src={image} alt="" />
      </div>
      <div className="cart-info">
        <h5 className="item-name">{name}</h5>
        <p className="item-price">{(price * quantity).toFixed(2)}</p>
        <div className="quantity-control">
          <button id={partNumber} onClick={props.removeFromCart}>
            -
          </button>
          <p className="item-quantity">{quantity}</p>
          <button id={partNumber} onClick={props.addToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
