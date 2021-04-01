import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom'


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography  variant="h6" className={classes.shopabout} color="inherit">
                    <Link to="/shop" className={classes.shop} >Shop</Link>
                      
                       </Typography>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src='http://s13.favim.com/orig/160518/grey-logo-nike-white-Favim.com-4320103.jpeg' alt="thats a shop" className={classes.image} height="25px" />
                        La Boutique
                    </Typography>
                    <div className={classes.grow}>hvhfh</div>
                    {location.pathname === '/shop', '/detail' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        </div> )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
