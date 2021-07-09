import { data } from "./data";

function App() {
  return (
    <div classNameName="grid__container">
      <header className="row">
          <div>
              <a className="brand" href="index.html">Amazona</a>
          </div>
          <div>
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
          </div>
      </header>
      <main>
          <div className="row center">
            {data.products.map((product) => (
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="./images/ps5.jpg" alt="product" />
                  </a>
                  <div className="card__body">
                      <a href="product.html">
                          <h2>{product.name}</h2>
                      </a>
                      <div className="rating">
                          <span>
                              <i className="fa fa-star"></i>
                          </span>
                          <span>
                              <i className="fa fa-star"></i>
                          </span>
                          <span>
                              <i className="fa fa-star"></i>
                          </span>
                          <span>
                              <i className="fa fa-star"></i>
                          </span>
                          <span>
                              <i className="fa fa-star"></i>
                          </span>
                      </div>
                      <div className="price">
                          ₦ 100,000.00
                      </div>
                  </div>
              </div>
            ))}
          </div>
      </main>
      <footer className="row center">
        All rights reserved
      </footer>
    </div>
  );
}

export default App;
