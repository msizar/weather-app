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

    currentWeatherCarouselRootContent: {
      padding: '30px 0px',
      height: '100px',

      [theme.breakpoints.up('md')]: {
        height: '150px',
      },
    },

    carouselRight: {
      textAlign: 'center',
    },

    carouselIcon: {
      width: '100px',

      [theme.breakpoints.up('md')]: {
        width: '150px',
      },
    },

    carouselAlert: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 13px 25px 0px',
    },

    currentWeatherIcon: {
      animation: ' $heartbeat 2s infinite linear',
      color: '#ffca00',
    },

    '@keyframes heartbeat': {
      ' 0%, 100%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(0.8)',
      },
    },
  }),
);

export default styles;
