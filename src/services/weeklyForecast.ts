import axios from 'axios';
const URL = `https://api.openweathermap.org/data/2.5/onecall?id=3369157&exclude=hourly,daily`;
const key = `appid=${process.env.REACT_APP_API_KEY}`;

export const getWeeklyForecast = (units: string) => {
  return axios.get(`${URL}&units=${units}&${key}`);
};
