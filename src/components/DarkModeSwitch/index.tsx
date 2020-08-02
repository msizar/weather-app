import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';
import { Brightness7, Brightness2 } from '@material-ui/icons';

import useStyles from './styles';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
};
export const DarkModeSwitch: React.FC<Props> = ({
  handleChange,
  darkMode,
}) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      className={classes.darkModeSwitchToggleMode}
      control={
        <Switch
          checked={darkMode}
          onChange={handleChange}
          checkedIcon={<Brightness2 color={'inherit'} />}
          icon={<Brightness7 color={'inherit'} />}
          name="checkedA"
          value={'lots'}
          placeholder="hello"
          classes={{
            root: classes.darkModeSwitchRoot,
            switchBase: classes.darkModeSwitchBase,
            thumb: classes.thumb,
            track: classes.darkModeSwitchTrack,
            checked: classes.darkModeSwitchChecked,
          }}
        />
      }
      label=""
    />
  );
};

export default DarkModeSwitch;
