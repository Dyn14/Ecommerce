import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();



    return (
        <Card className={classes.root}>
        <Link to={`/shop/${product.id}`}><CardMedia className={classes.media} image={product.media.source} title={product.name} /></Link>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                    <CardActions disableSpacing className={classes.cardActions} onClick={() => onAddToCart(product.id, 1) }>
                        <IconButton aria-label="Add to Cart" >
                            <AddShoppingCart  className='high' />
                        </IconButton>
                    </CardActions>
               
            </CardContent>
        </Card>
    )
}

export default Product
