import React from 'react';
import { Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import useStyles from './styles';

export const GitButton: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.gitButtonRoot}>
      <Button
        className={classes.gitButton}
        variant="outlined"
        href="https://github.com/msizar/weather-app"
      >
        <GitHub />
      </Button>
    </div>
  );
};

export default GitButton;
