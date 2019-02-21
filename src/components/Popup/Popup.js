import { withStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import PropTypes from 'prop-types';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

const PopupComponent = ({ classes, handleClose, popUpData }) => {
  console.log('popUpData', popUpData);
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={!!popUpData}
      onClose={handleClose}
    >
      <div className={classes.paper}>this is a model</div>
    </Modal>
  );
};

PopupComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func,
  popUpData: PropTypes.node,
};

PopupComponent.defaultProps = {
  handleClose: f => f,
  popUpData: undefined,
};

const Popup = withStyles(styles)(PopupComponent);

export default Popup;
