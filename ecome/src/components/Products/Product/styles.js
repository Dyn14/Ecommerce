import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginBottom: '40px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    border: '1px solid #114891',
    cursor: 'pointer'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
}));