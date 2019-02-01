import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import icons from '../../constants/icons';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const LeftPane = ({ children, open, toggleDrawer }) => (
  <Drawer open={open} onClose={() => toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      {children}
    </div>
  </Drawer>
);

LeftPane.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

LeftPane.defaultProps = {
  open: false,
  children: (
    <Fragment>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <i className={icons.delete} /> : <i className={icons.filter} />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <i className={icons.delete} /> : <i className={icons.filter} />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  ),
  toggleDrawer: f => f,
};

export default withStyles(styles)(LeftPane);
