import classnames from 'classnames';
import React from 'react';
import icons from '../../../../constants/icons';
import * as styles from './NavBar.css';

const NavBar = () => (
  <div className={styles.container}>
    <div className={styles.logo}>NavBar</div>
    <i className={classnames(icons.menu, styles.menuIcon)} />
  </div>
);
export default NavBar;
