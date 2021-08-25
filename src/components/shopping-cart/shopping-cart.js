import "./shopping-cart.css";

const ShoppingCart = (props) => {
  return (
    <div className="shopping-cart">
      <h3>Cart</h3>
      <a
        href="#"
        onClick={() => {
          props.setShowCart(false);
        }}
      >
        X
      </a>
    </div>
  );
};

export default ShoppingCart;
