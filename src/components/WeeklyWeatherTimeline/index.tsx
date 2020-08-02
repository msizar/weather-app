import React from 'react';

import useStyles from './styles';
import { Text, SmallText } from '../Typography';
import Carousel from '../Carousel';
import Day from '../../models/Day';

type Props = {
  data?: Day[];
};

const WeeklyWeatherTimeline: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  //Reduce data to weekly forecast only
  const weeklyResult = () => {
    const dataTemp = data
      ? data.reduce(function (r, a) {
          const _date = new Date(a.dt_txt).toDateString();

          r[_date] = r[_date] || [];
          r[_date].push(a);

          return r;
        }, Object.create(null))
      : [];

    const arrTemp = Object.keys(dataTemp).map((key) => {
      const datum = dataTemp[key][0];
      datum.dt_str = new Date(datum.dt_txt).toDateString();
      return datum;
    });

    return arrTemp;
  };

  //Time Weather Node
  const timeWeather =
    data &&
    weeklyResult().map((day: Day) => (
      <div key={day.dt} className={classes.carouselContent}>
        <Text>{day.dt_str.substr(0, 3)}</Text>
        <img
          className={classes.weatherTimeIcon}
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].main}
        />
        <SmallText>{day.main.temp_max}°</SmallText>
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

export default WeeklyWeatherTimeline;
