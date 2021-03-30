import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateToCartQty, handleRemoveToCart, handleEmptyCart }) => {
   
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1' > No artcle, make something
            <Link to="/" className={classes.link}>  adding something</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <div>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                            <CartItem item={item} onUpdateToCartQty={handleUpdateToCartQty} onRemoveToCart={handleRemoveToCart} />
                    </Grid>
                ))}
            </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h5'>Total: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Card</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>
        </div>
    )

    if(!cart.line_items) return `Loading..`

    return (
        <Container className={classes.container}>
            <div className={classes.toolbar} />
            <Typography  className={classes.title} variant='h3' gutterBottom >Your Shopping bag</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
