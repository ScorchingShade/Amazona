import React from 'react'
import data from './data'
import Product from './components/Product'

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazoning</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">SignIn</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.products.map((product)=>(
                    <Product key={product.id} product={product}></Product>

                ))
              }
                

            </div>
        </main>
        <footer className="row center">A production by Ankush Sharm @ ScorchingShade</footer>
    </div>
  );
}

export default App;
