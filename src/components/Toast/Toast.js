import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import icons from '../../constants/icons';

const variantIcon = {
  success: icons.success,
  warning: icons.warning,
  error: icons.error,
  info: icons.info,
};

const styles = theme => ({
  success: {
    backgroundColor: '#43a047',
  },
  error: {
    backgroundColor: '#d32f2f',
  },
  info: {
    backgroundColor: '#303f9f',
  },
  warning: {
    backgroundColor: '#ffa000',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  close: {
    padding: theme.spacing.unit / 2,
  },
});

const MySnackbarContent = props => {
  const { classes, className, message, onClose, type, ...other } = props;

  return (
    <SnackbarContent
      className={classNames(classes[type], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <i className={classNames(variantIcon[type], classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <i className={icons.close} />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

const Toast = ({ openProps, message, position, type, duration }) => {
  const [open, setOpen] = useState(openProps);
  return (
    <div>
      <Snackbar
        anchorOrigin={position}
        open={open}
        autoHideDuration={duration}
        onClose={() => setOpen(false)}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <MySnackbarContentWrapper onClose={() => setOpen(false)} type={type} message={message} />
      </Snackbar>
    </div>
  );
};

Toast.propTypes = {
  classes: PropTypes.object.isRequired,
  duration: PropTypes.number,
  message: PropTypes.string,
  openProps: PropTypes.bool,
  position: PropTypes.object,
  type: PropTypes.string,
};

Toast.defaultProps = {
  position: {
    vertical: 'top',
    horizontal: 'center',
  },
  openProps: true,
  message: 'No message is available',
  type: 'error',
  duration: 6000,
};

export default Toast;
