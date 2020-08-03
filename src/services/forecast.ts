import axios from 'axios';
const URL = `httpss://api.openweathermap.org/data/2.5/forecast?id=3369157`;
const key = `appid=${process.env.REACT_APP_API_KEY}`;

export const getWeather = (units: string) => {
  return axios.get(`${URL}&units=${units}&${key}`);
};
