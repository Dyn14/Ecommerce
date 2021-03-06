import React from "react"
import {useParams} from "react-router-dom"
import {Typography, IconButton, Button, Grid, ButtonGroup, Select, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList  } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ShoppingCart } from '@material-ui/icons'

const options = ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46' ];

function Detail(props) {

const {prodId} = useParams();
  const prod = props.products.find(pro => pro.id === prodId);



  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
    
    return (
        <div className="detail">
            <img src={prod.media.source} alt={prod.name} className='imageleft' />
            <div className='detailright' >
            <Typography dangerouslySetInnerHTML={{ __html: prod.name }} variant="h2" color="light" className="detailtitre"/>
                  <Typography dangerouslySetInnerHTML={{ __html: prod.description }} variant="body1" color="textSecondary" className='detailrightpara' />
                  <Typography dangerouslySetInnerHTML={{ __html: prod.price.formatted_with_symbol }} variant="h4" color="light" className='detailrightpara' />
          


                  <Grid container direction="column"  className='buttonwarper'>
                  <Grid item xs={12}>
                    <ButtonGroup variant="contained" color="outlined" ref={anchorRef} aria-label="split button">
                      <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                      <Button
                        color="outlined"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList id="split-button-menu">
                                {options.map((option, index) => (
                                  <MenuItem
                                    key={option}
                                    disabled={index === 2}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                  >
                                    {option}
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Grid>
                </Grid>
              



            <Button   onClick={() => props.onAddToCart(prod.id, 1) }>
                    Add to the bag
                      <IconButton aria-label="Add to Cart" >                
                          <ShoppingCart color='secondary' />
                        </IconButton>
                    </Button>
                    </div>
                   
        </div>

        
    )
}

export default Detail