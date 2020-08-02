import React from 'react';

import useStyles from './styles';
import { Text, SmallText } from '../Typography';
import Carousel from '../Carousel';
import Day from '../../models/Day';

type Props = {
  todaysWeatherTimes: Day[];
};

const WeatherTimeline: React.FC<Props> = ({ todaysWeatherTimes }) => {
  const classes = useStyles();

  /**
   * Sanitize time
   * @param date
   */
  const sanitizeTime = (date: string) => {
    return date.split(' ')[1].substr(0, 5);
  };

  // timeWeather Node
  const timeWeather =
    todaysWeatherTimes &&
    todaysWeatherTimes.map((day: Day) => (
      <div key={day.dt} className={classes.carouselContent}>
        <Text>{sanitizeTime(day.dt_txt)}</Text>
        <img
          className={classes.weatherTimeIcon}
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].main}
        />
        <SmallText>{day.main.temp}°</SmallText>
      </div>
    ));

  return (
    <Carousel
      settingProps={{
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              infinite: false,
              centerPadding: '50px',
              slidesToShow: 3,
              slidesToScroll: 1,
              speed: 500,
              dots: false,
              arrows: true,
            },
          },
        ],
      }}
    >
      {timeWeather}
    </Carousel>
  );
};

export default WeatherTimeline;
