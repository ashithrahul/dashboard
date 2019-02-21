import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const MenuComponent = ({ list, anchorEl, closeMenu }) => (
  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={() => closeMenu(null)}
  >
    {list.map(li => (
      <MenuItem onClick={li.onClick}>{li.title}</MenuItem>
    ))}
  </Menu>
);

MenuComponent.propTypes = {
  anchorEl: PropTypes.node,
  closeMenu: PropTypes.func,
  list: PropTypes.instanceOf({}),
};

MenuComponent.defaultProps = {
  list: {},
  anchorEl: null,
  closeMenu: f => f,
};

export default MenuComponent;
