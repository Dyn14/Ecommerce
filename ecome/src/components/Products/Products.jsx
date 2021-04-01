import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Route } from 'react-router-dom';
import Product from './Product/Product';
import useStyles from './styles';
import Detail from '../Detail/Detail';
import InfoProducts from './InfoProducts/InfoProducts'
import Footer from '../Footer/Footer';
import MediaProduct from './MediaProduct/MediaProduct';
import SplitMedia from './SplitMedia/SplitMedia';




const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <>
        <main className={classes.content}>
            <InfoProducts />
            <MediaProduct />  
            <div className={classes.toolbar} />
            <h1 className={classes.title}>Limited Edition Nike sneakers</h1>
            <Grid container justify="center" spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} onAddToCart={onAddToCart} />
                        <Route exact path="/shop/:prodId" component={Detail} />
                    </Grid> 
                ))}
            </Grid>  
            <SplitMedia /> 
            
        </main>
        <Footer />
        </>
    );
};

export default Products;