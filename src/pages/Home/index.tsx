import React, { useEffect, useState } from 'react';

import useStyles from './styles';
import GridList from '../../components/GridList';
import DarkModeSwitch from '../../components/DarkModeSwitch';
import { getWeather } from '../../services/forecast';
import getBackground from '../../helpers/getBackground';
import Day from '../../models/Day';
import UnitSwitch from '../../components/UnitSwitch';

const Home: React.FC = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [data, setData] = useState();
  const [unit, setUnit] = useState<string>('metric');
  const [todaysData, setTodayData] = useState<Day[]>();
  const [background, setBackground] = useState<string>('');
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * handle switch change
   * @param event
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDarkMode(event.target.checked);
  };

  const handleChangeUnits = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setUnit(event.target.value as string);
    setTimerOn(false);
  };

  /**
   * Call service data
   */
  const getWeatherData = () => {
    setLoading(true);
    getWeather(unit)
      .then((res) => {
        setLoading(false);
        if (res.data.cod === '200') {
          const dataTemp = res.data;
          setTimerOn(true);
          setData(dataTemp);
          setBackground(getBackground(dataTemp.city));

          setTodayData(dataTemp.list);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let handle: any;

    if (!timerOn) getWeatherData();

    handle = setInterval(getWeatherData, 1000 * 20);

    return () => {
      clearInterval(handle);
    };
  });

  return (
    <div
      className={`${classes.homeRoot}  ${
        darkMode && classes.homeRootDark
      }`}
    >
      <DarkModeSwitch
        darkMode={darkMode}
        handleChange={handleChange}
      />

      <UnitSwitch unit={unit} handleChange={handleChangeUnits} />
      <GridList
        dayGradientColor={background}
        data={data}
        todaysWeatherTimes={todaysData || []}
        loading={loading}
      />
    </div>
  );
};

export default Home;
