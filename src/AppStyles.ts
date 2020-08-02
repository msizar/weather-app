import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import { colors } from './assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    appRoot: {
      backgroundColor: colors.white,
    },

    appBody: {
      width: '100%',
    },

    appLogo: {
      fontSize: '1em',
      fontWeight: 600,
      width: '40px',
      height: '40px',
      backgroundColor: 'transparent',
      border: 'solid 2px ',
      cursor: 'pointer',

      [theme.breakpoints.up('md')]: {
        fontSize: '1.3em',
        width: '50px',
        height: '50px',
      },
    },

    appLinks: {
      color: colors.white,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
);

export default styles;
