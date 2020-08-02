import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme) => ({
  button: {
    background: colors.darkRed,
    color: colors.white,
    borderRadius: '4px',
    textTransform: 'capitalize',
    margin: '5px 0px',
    padding: '5px',
    width: '100%',

    '&:hover': {
      background: colors.darkHover,
    },
  },

  secondaryButton: {
    background: '#101226',
    border: `solid 1.8px ${colors.darkRed}`,
    color: colors.lightBackground,
    padding: '12px',
    minWidth: '64px',

    '&:hover': {
      borderColor: colors.secondary,
      textDecoration: 'underline',
    },
  },

  secondaryButtonActive: {
    borderColor: colors.secondary,
    textDecoration: 'underline',
  },

  linkButton: {
    display: 'block',
    width: '100%',
    fontSize: '.9rem',
    fontWeight: 600,
    textAlign: 'center',
    color: colors.white,
    textDecoration: 'none',
    border: `solid 1.8px ${colors.darkRed}`,
    background: colors.darkRed,
    margin: '5px 0px',
    padding: '5px',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    borderRadius: '5px',
    minWidth: '64px',
    maxWidth: '80px',
    boxSizing: 'border-box',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    textTransform: 'capitalize',

    '&:hover': {
      background: colors.darkHover,
      boxShadow:
        '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
  },

  textButton: {
    color: colors.dark,
    fontWeight: 600,
    padding: '0px',
    margin: '5px 0px',
    fontSize: '.8em',

    '&:hover': {
      borderColor: colors.secondary,
      background: 'unset',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '.8em',
    },
  },
}));

export default styles;
