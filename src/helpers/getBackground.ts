import { colors } from '../assets/colors';
import City from '../models/City';
const getBackground = (city?: City): string => {
  const time = Date.now().toString().substring(0, 10);
  const defaultSky: string = '';

  if (!city) {
    return defaultSky;
  }

  const sunrise = new Date(city.sunrise);
  const sunset = new Date(city.sunset);
  const sunrisen = (sunrise.getTime() + sunset.getTime()) / 2;
  const timeInt = parseInt(time);

  switch (true) {
    case timeInt < sunrise.getTime():
      return colors.nightGradient;

    case timeInt >= sunrise.getTime() && timeInt < sunrisen:
      return colors.warm;

    case timeInt >= sunrisen && timeInt < sunset.getTime():
      return colors.hot;

    case timeInt >= sunset.getTime():
      return colors.nightGradient;

    default:
      return defaultSky;
  }
};

export default getBackground;
