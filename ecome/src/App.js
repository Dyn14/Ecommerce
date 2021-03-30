import React, { useState, useEffect } from 'react';
import './App.css';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart, Checkout, Home, Detail } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {


    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list(); 

        setProducts(data);
    }


    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart)
    }

    const handleUpdateToCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart)
    }

    const handleRemoveToCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart)
    }




    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    
console.log(products);


    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Home onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/shop">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    
                    <Route exact path="/shop/:prodId">
                        <Detail  products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart} 
                            handleUpdateToCartQty={handleUpdateToCartQty}
                            handleRemoveToCart={handleRemoveToCart}
                            handleEmptyCart={handleEmptyCart}

                            />
                    </Route>
                    <Route exact path="/checkout">
                     <Checkout cart={cart} />
                </Route>
            </Switch>
            </div>
        </Router>
        
    )
}

export default App;
