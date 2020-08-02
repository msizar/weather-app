import React from 'react';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles';
import { Heading, SubTitle, Text } from '../Typography';
import Carousel from '../Carousel';
import { FADE_IN } from '../../constants/animate';
import City from '../../models/City';
import Day from '../../models/Day';
import generateAlert from '../../helpers/generateAlert';

type Props = {
  city: City;
  today: Day;
  loading: boolean;
};

export const CurrentWeather: React.FC<Props> = ({
  city,
  today,
  loading,
}) => {
  const classes = useStyles();
  const alertMessage = today ? generateAlert(today.main.temp) : '';

  return (
    <Carousel>
      <div className={classes.currentWeatherCarouselRootContent}>
        <div className={classes.carouselContent}>
          <div>
            {today && (
              <>
                <Heading>
                  {loading ? (
                    <Skeleton width={140} />
                  ) : (
                    `${today.main.temp}°`
                  )}
                </Heading>
                <SubTitle>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <>
                      {city.name} • {city.country}
                    </>
                  )}
                </SubTitle>
              </>
            )}
          </div>
          <div
            className={`${classes.carouselRight} ${FADE_IN} animate__delay-2s`}
          >
            <img
              src={
                today &&
                `http://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`
              }
              alt=""
              className={classes.carouselIcon}
            />
            <div className={classes.carouselAlert}>
              <NotificationImportantIcon
                className={classes.currentWeatherIcon}
              />
              <Text>{alertMessage}</Text>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CurrentWeather;
