import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./screen/CartScreen";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="grid__container">
      <header className="row">
          <div>
              <Link className="brand" href="/">Amazona</Link>
          </div>
          <div>
              <Link href="/cart">Cart</Link>
              <Link href="/signin">Sign In</Link>
          </div>
      </header>
      <main>
        <Route exact path="/cart/:id?" component={CartScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
      </main>
      <footer className="row center">
        All rights reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
