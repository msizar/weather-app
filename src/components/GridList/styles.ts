import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '0px 10px',
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: '30px',

      [theme.breakpoints.up('md')]: {},
    },

    gridItem: {
      width: '100%',
      padding: '0px 20px 20px 20px ',

      [theme.breakpoints.up('md')]: {
        width: '600px',
        padding: '0px 0px 20px 0px ',
      },
    },

    carouselContent: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100%',
      textAlign: 'initial',
    },

    carouselRight: {},

    carouselIcon: {
      width: '70px',

      [theme.breakpoints.up('md')]: {
        width: '90px',
      },
    },

    gridError: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '30px 20px',
      height: '100px',

      [theme.breakpoints.up('md')]: {
        height: '150px',
      },
    },
  }),
);

export default styles;
