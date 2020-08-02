import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    carouselRoot: {
      width: 50,
      height: 30,
      padding: 0,
      margin: theme.spacing(1),
      overflow: 'inherit',
    },
  }),
);

export default styles;
