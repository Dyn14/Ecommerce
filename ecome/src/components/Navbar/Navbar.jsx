import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
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
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src='https://cdn.dribbble.com/users/2536313/screenshots/15218108/media/42de775eada717cec0c8cd2688d3f27d.jpg?compress=1&resize=1600x1200' alt="thats a shop" className={classes.image} height="25px" />
                        La Boutiques 
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname === '/' && (
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
