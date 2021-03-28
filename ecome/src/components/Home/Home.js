import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';


export default function SimpleContainer() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container  >
        <Typography component="div" style={{ }} className={classes.media}>
        <img className={classes.img} src='https://cdn.dribbble.com/users/2536313/screenshots/15218108/media/42de775eada717cec0c8cd2688d3f27d.jpg?compress=1&resize=1600x1200' alt="thats a shop"  width="100%"  />
           
        </Typography>
      </Container>
    </React.Fragment>
  );
}
