import React, { ReactNode } from 'react';
import useStyles from './styles';

type Props = {
  children: ReactNode;
};
export const Title = ({ children }: Props) => {
  const classes = useStyles();
  return <h2 className={classes.title}>{children}</h2>;
};

export const SubTitle = ({ children }: Props) => {
  const classes = useStyles();
  return <h2 className={classes.subTitle}>{children}</h2>;
};

export const Heading = ({ children }: Props) => {
  const classes = useStyles();
  return <h1 className={classes.heading}>{children}</h1>;
};

export const Text = ({ children }: Props) => {
  const classes = useStyles();
  return <p className={classes.text}>{children}</p>;
};

export const SmallText = ({ children }: Props) => {
  const classes = useStyles();
  return <p className={classes.smallText}>{children}</p>;
};

export const ErrorText = ({ children }: Props) => {
  const classes = useStyles();
  return <p className={classes.errorText}>{children}</p>;
};
