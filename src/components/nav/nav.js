import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
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
          <Link to="#">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
