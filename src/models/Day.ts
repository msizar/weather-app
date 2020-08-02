interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface Day {
  clouds: any;
  dt: number;
  dt_txt: string;
  dt_str: string;
  country: string;
  weather: Weather[];
  wind: Wind;
  main: Main;
}

export default Day;
