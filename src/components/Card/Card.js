import classNames from 'classnames';
import React from 'react';
import * as styles from './Card.css';

const Card = ({child,classes}) => (
  <div className={classNames(styles.container, classes.container)}>{child}</div>
);
export default Card;
