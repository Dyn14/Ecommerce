import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { Link } from 'react-router-dom'

const images = [
  

  {
    url: 'https://cdn.dribbble.com/users/806765/screenshots/14839919/media/66492241b02070158f78877506782c67.png',
    title: 'Shop',
    width: '100%',
    
  },

];



export default function ButtonBases() {
  const classes = useStyles();

  return (
    <Link to='/shop'>
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </Link>
  );
}
