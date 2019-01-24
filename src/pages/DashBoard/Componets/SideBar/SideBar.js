import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import * as styles from './SideBar.css';
import userAvatar from '../../../../../assets/media/images/avatar-1.jpg';
import { MENU } from './SideBar.constants';

const SideMenu = () => {
  const [activeItem, setactiveItem] = useState('Charts');
  return (
    <Fragment>
      <ul>
        {MENU.map(item => (
          <li
            onClick={() => setactiveItem(item.name)}
            className={classnames(styles.title, { [styles.active]: item.name === activeItem })}
          >
            <i className={classnames(item.icon, styles.icon)} />
            <span className={styles.itemName}>{item.name}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export const SideBar = () => (
  <div className={styles.sideBarWrapper}>
    <div className={styles.userBox}>
      <div className={styles.userImgBox}>
        <img src={userAvatar} className={styles.userImg} />
      </div>
      <h5 className={styles.name}>Ashith Rahul</h5>
    </div>
    <SideMenu />
  </div>
);

export default SideBar;
