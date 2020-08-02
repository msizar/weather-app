import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { colors } from '../../assets/colors';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    darkModeSwitchRoot: {
      width: 50,
      height: 35,
      padding: 0,
      margin: theme.spacing(1),
      overflow: 'inherit',
    },

    darkModeSwitchToggleMode: {
      position: 'absolute',
      top: '3px',
      right: '20px',
      marginRight: '0px',
    },

    darkModeSwitchBaseDark: {
      color: 'red',
      backgroundColor: 'inherit',
    },

    darkModeSwitchBase: {
      padding: 6,
      color: colors.orange,

      '&$checked': {
        transform: 'translateX(16px)',
        color: colors.white,
        '& + $track': {
          backgroundColor: colors.dark,
          color: colors.white,
          opacity: 1,
          border: 'solid 1px #fff',
        },
      },
      '&$focusVisible $thumb': {
        backgroundColor: 'inherit',
        color: 'inherit',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    darkModeSwitchTrack: {
      borderRadius: 14,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create([
        'background-color',
        'border',
      ]),
    },
    darkModeSwitchChecked: {},
    darkModeSwitchFocusVisible: {},
  }),
);

export default styles;
