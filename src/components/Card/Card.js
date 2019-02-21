import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './Card.css';

const Card = ({ child, classes }) => (
  <div className={classNames(styles.container, classes.container)}>{child}</div>
);

Card.propTypes = {
  child: PropTypes.node,
  classes: PropTypes.instanceOf({}),
};

Card.defaultProps = {
  classes: {},
  child: undefined,
};
export default Card;
