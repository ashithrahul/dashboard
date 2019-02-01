import classnames from 'classnames';
import React, { Component } from 'react';
import Drawer from '../../../../components/Drawer/Drawer';
import icons from '../../../../constants/icons';
import * as styles from './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.onMenuBtnClick = this.onMenuBtnClick.bind(this);
  }

  onMenuBtnClick(open) {
    this.setState({ open });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.logo}>NavBar</div>
        <i
          className={classnames(icons.menu, styles.menuIcon)}
          onClick={() => this.onMenuBtnClick(true)}
        />
        <Drawer open={open} toggleDrawer={this.onMenuBtnClick} />
      </div>
    );
  }
}

export default NavBar;
