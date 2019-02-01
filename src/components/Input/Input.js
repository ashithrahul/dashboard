import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './Input.css';

const styles1 = theme => ({
  cssLabel: {
    '&$cssFocused': {
      color: '#98a6ad',
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#98a6ad',
    },
  },
  notchedOutline: {},
});

const Input = ({ classes, label, variant, onChange }) => (
  <div className={styles.test}>
    <TextField
      fullWidth
      className={classes.margin}
      InputLabelProps={{
        classes: {
          root: classNames(classes.cssLabel),
          focused: classNames(classes.cssFocused),
        },
      }}
      InputProps={{
        classes: {
          root: classNames(classes.cssOutlinedInput),
          focused: classNames(classes.cssFocused),
          notchedOutline: classNames(classes.notchedOutline),
        },
      }}
      label={label}
      variant={variant}
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
};

Input.defaultProps = {
  classes: {},
  label: '',
  variant: 'outlined',
  onChange: f => f,
};

export default withStyles(styles1)(Input);
