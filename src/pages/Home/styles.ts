import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    homeRoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1px',
      height: '100%',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: colors.light,
      paddingTop: 'unset',

      [theme.breakpoints.up('md')]: {
        paddingTop: '3em',
      },
    },

    homeRootDark: {
      backgroundColor: colors.dark,
      color: colors.white,
    },

    heading: {
      position: 'relative',
      textAlign: 'center',
    },
  }),
);

export default styles;
