import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Route } from 'react-router-dom';
import Product from './Product/Product';
import useStyles from './styles';
import Detail from '../Detail/Detail';
import InfoProducts from './InfoProducts/InfoProducts'



const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <InfoProducts />
            <h1>Limited edition Nike sneakers</h1>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} onAddToCart={onAddToCart} />
                        <Route exact path="/shop/:prodId" component={Detail} />
                       
                    
                    </Grid> 
                ))}
            </Grid>
        </main>
    );
};

export default Products;