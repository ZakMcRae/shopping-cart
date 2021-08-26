import { Link } from "react-router-dom";
import "./nav.css";

const Nav = (props) => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-link home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-link">
          <Link
            to="#"
            // toggle cart on click
            onClick={() => {
              props.setShowCart((prevShowCart) => !prevShowCart);
            }}
          >
            Cart {props.count}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
