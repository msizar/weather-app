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

    carouselContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      padding: '30px 0px',
      marginBottom: '20px',

      [theme.breakpoints.up('md')]: {
        height: '150px',
      },
    },

    weatherTimeIcon: {
      margin: 'auto',
      width: '70px',

      [theme.breakpoints.up('md')]: {
        width: '100px',
      },
    },
  }),
);

export default styles;
