import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    gitButtonRoot: {
      marginTop: '4px',
      marginLeft: '10px',
    },

    gitButton: {
      borderRadius: '10px',
      border: '1px solid #ced4da',
    },
  }),
);

export default styles;
