const generateAlert = (temp: number) => {
  if (temp < 15) return 'Cold';

  if (temp >= 15 && temp < 25) return 'Warm';

  if (temp >= 25) return 'Hot';

  return '';
};

export default generateAlert;
