import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div classNameName="grid__container">
      <header className="row">
          <div>
              <a className="brand" href="/">Amazona</a>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
          </div>
      </header>
      <main>
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
