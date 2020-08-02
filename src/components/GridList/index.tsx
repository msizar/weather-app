import React from 'react';
import { Paper, Grid } from '@material-ui/core';

import useStyles from './styles';
import { FADE_IN_DOWN } from '../../constants/animate';
import CurrentWeather from '../CurrentWeather';
import WeatherTimeline from '../WeatherTimeline';
import WeeklyWeatherTimeline from '../WeeklyWeatherTimeline';
import Day from '../../models/Day';

type Props = {
  data: any;
  dayGradientColor: string;
  todaysWeatherTimes: Day[];
  loading: boolean;
};
export const GridList: React.FC<Props> = ({
  data,
  dayGradientColor,
  todaysWeatherTimes,
  loading,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        className={`${classes.gridItem} ${FADE_IN_DOWN} animate__delay-1s`}
      >
        <Paper
          className={classes.paper}
          style={{
            background: dayGradientColor,
          }}
        >
          <CurrentWeather
            city={data ? data.city : ''}
            today={data ? data.list[0] : null}
            loading={loading}
          />
        </Paper>
      </Grid>

      <Grid
        item
        className={`${classes.gridItem} ${FADE_IN_DOWN} animate__delay-2s`}
      >
        <Paper className={classes.paper}>
          <WeatherTimeline todaysWeatherTimes={todaysWeatherTimes} />
        </Paper>
      </Grid>

      <Grid
        item
        className={`${classes.gridItem} ${FADE_IN_DOWN} animate__delay-3s`}
      >
        <Paper className={classes.paper}>
          <WeeklyWeatherTimeline data={data ? data.list : []} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GridList;
