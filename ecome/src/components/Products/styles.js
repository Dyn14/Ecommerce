import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    padding: '3px 30px'
  },
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },
  title: {
    fontWeight : "lighter"
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    border: '1px solid #ccc',
    cursor: 'pointer'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));