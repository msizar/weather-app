import React from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  Paper,
} from '@material-ui/core';

import useStyles from './styles';

type Props = {
  open: boolean;
  handleClose: () => void;
  onClickRetry: () => void;
};
const GitButton: React.FC<Props> = ({
  open,
  handleClose,
  onClickRetry,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <h2 id="transition-modal-title">Error loading data</h2>
            <p id="transition-modal-description">
              Something went wrong, please wait while we retry or
              click button
            </p>
            <Button onClick={onClickRetry} variant="outlined">
              Retry
            </Button>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default GitButton;
