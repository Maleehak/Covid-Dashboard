
import { makeStyles} from '@material-ui/styles';
import Color from 'color'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #dff2f5 30%, #dcfcf3 90%)',
    border: 0,
    borderRadius: 16,
    boxShadow: '0 3px 5px 2px rgba(188, 195, 196, .3)',
    color: 'grey',
    height: 200,
    padding: '30px 30px',
  },
  card:{
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color('#203f52')
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    }
  }
});

export default useStyles;