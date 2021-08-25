import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav";
import HomePage from "./components/home/homepage";
import Products from "./components/products/products";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
