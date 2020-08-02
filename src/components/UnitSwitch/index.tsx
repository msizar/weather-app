import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './styles';
import { InputBase } from '@material-ui/core';

type Props = {
  handleChange: (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => void;
  unit: string;
};
export const UnitSwitch: React.FC<Props> = ({
  handleChange,
  unit,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.unitSwitchRoot}>
      <Select
        id="demo-customized-select"
        value={unit}
        onChange={handleChange}
        input={
          <InputBase
            classes={{ root: classes.root, input: classes.input }}
          />
        }
      >
        <MenuItem value={'metric'}>℃</MenuItem>
        <MenuItem value={'imperial'}>°F</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UnitSwitch;
