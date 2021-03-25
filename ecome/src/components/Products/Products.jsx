import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$50', image: 'https://cdn.dribbble.com/users/77553/screenshots/11547223/media/595aef422e069d99d014bb713d0f531a.jpg'},
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$50', image: 'https://cdn.dribbble.com/users/77553/screenshots/11547223/media/595aef422e069d99d014bb713d0f531a.jpg'},
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$50', image: 'https://cdn.dribbble.com/users/77553/screenshots/11547223/media/595aef422e069d99d014bb713d0f531a.jpg'},
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$50', image: 'https://cdn.dribbble.com/users/77553/screenshots/11547223/media/595aef422e069d99d014bb713d0f531a.jpg'},
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$50', image: 'https://cdn.dribbble.com/users/77553/screenshots/11547223/media/595aef422e069d99d014bb713d0f531a.jpg'},
    { id: 2, name: 'MacBook', description: 'Portable pc', price: '$1150', image: 'https://cdn.dribbble.com/users/52573/screenshots/9163642/media/f36766075cb4efccb4b3bbb3e0ffa369.jpg'},
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} />
                    </Grid> 
                ))}
            </Grid>
        </main>
    );
};

export default Products;