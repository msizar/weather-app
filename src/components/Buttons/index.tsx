import React from 'react';
import { Button, Link } from '@material-ui/core';

import styles from './styles';

type Props = {
  children?: string;
  handleOnClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained' | undefined | 'link';
  link?: any;
  type?: 'button' | 'reset' | 'submit' | undefined;
  component?: any;
  disabled?: boolean;
  active?: boolean;
};

const Buttons = ({
  children,
  component,
  handleOnClick,
  variant,
  link,
  type,
  disabled,
  active,
}: Props) => {
  const classes = styles();

  switch (variant) {
    case 'outlined':
      return (
        <Button
          className={`${classes.secondaryButton} ${
            active && classes.secondaryButtonActive
          }`}
          fullWidth
          variant="outlined"
          type={type}
          href={link}
          component={component}
          disabled={disabled}
        >
          {children}
        </Button>
      );

    case 'link':
      return (
        <Link
          target="_blank"
          className={classes.linkButton}
          href={link}
        >
          {children}
        </Link>
      );

    case 'text':
      return (
        <Button
          className={classes.textButton}
          variant="text"
          onClick={handleOnClick}
          type={type}
          component={component}
          disabled={disabled}
        >
          {children}
        </Button>
      );

    case 'contained':
      return (
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleOnClick}
          type={type}
          component={component}
          disabled={disabled}
        >
          {children}
        </Button>
      );

    default:
      return (
        <Button
          type={type}
          disabled={disabled}
          variant={variant}
          onClick={handleOnClick}
        >
          {children}
        </Button>
      );
  }
};

export default Buttons;
