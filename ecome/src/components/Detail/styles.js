import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    border: '1px solid #ccc',
    cursor: 'pointer',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      display: 'flex',
      flexDirection: 'column'
    },
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  
}));