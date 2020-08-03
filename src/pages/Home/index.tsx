import React, { useEffect, useState, useCallback } from 'react';

import useStyles from './styles';
import GridList from '../../components/GridList';
import { getWeather } from '../../services/forecast';
import getBackground from '../../helpers/getBackground';
import Day from '../../models/Day';
import UnitSwitch from '../../components/UnitSwitch';
import GitButton from '../../components/GitButton';
import Modal from '../../components/Modal';

const Home: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [unit, setUnit] = useState<string>('metric');
  const [todaysData, setTodayData] = useState<Day[]>();
  const [background, setBackground] = useState<string>('');
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errorLoading, setErrorLoading] = useState<boolean>(false);

  const handleChangeUnits = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setUnit(event.target.value as string);
    setTimerOn(false);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  /**
   * Callback service data
   */
  const getWeatherData = useCallback(() => {
    setOpenModal(false);
    setLoading(true);
    setErrorLoading(false);

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
        setOpenModal(true);
        setLoading(false);
        setErrorLoading(true);
      });
  }, [unit]);

  useEffect(() => {
    let handle: any;

    if (!timerOn) getWeatherData();

    handle = setInterval(getWeatherData, 1000 * 20);

    return () => {
      clearInterval(handle);
    };
  }, [getWeatherData, timerOn]);

  /**
   * close modal and retry
   */
  const onClickRetry = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.homeRoot}>
      <div className={classes.homeHeader}>
        <UnitSwitch unit={unit} handleChange={handleChangeUnits} />
        <GitButton />
      </div>

      <GridList
        dayGradientColor={background}
        data={data}
        todaysWeatherTimes={todaysData || []}
        loading={loading}
        errorLoading={errorLoading}
      />
      <Modal
        onClickRetry={onClickRetry}
        open={openModal}
        handleClose={toggleModal}
      />
    </div>
  );
};

export default Home;
