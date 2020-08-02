import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      fontSize: '1.3em',
      margin: '0px',
      color: colors.text,
      lineHeight: '26px',
      fontWeight: 600,

      [theme.breakpoints.up('md')]: {},
    },

    title: {
      margin: 0,
      fontSize: '3em',
      color: colors.darkText,
    },

    heading: {
      margin: 0,
      fontSize: '3em',
      fontWeight: 600,
      textTransform: 'uppercase',
      color: colors.darkText,

      [theme.breakpoints.up('md')]: {
        fontSize: '6em',
      },
    },

    text: {
      fontSize: '1.2em',
      margin: '0px',
      color: colors.darkText,
      lineHeight: '26px',
      fontWeight: 700,

      [theme.breakpoints.up('md')]: {},
    },

    smallText: {
      fontSize: '1em',
      margin: '0px',
      color: colors.darkText,
      lineHeight: '26px',
      fontWeight: 700,

      [theme.breakpoints.up('md')]: {},
    },

    errorText: {
      color: colors.darkText,
      marginTop: '5px',
    },
  }),
);

export default styles;
