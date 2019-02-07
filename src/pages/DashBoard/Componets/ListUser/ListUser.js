import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import React, { Component, Fragment } from 'react';
import Card from '../../../../components/Card/Card';
import icons from '../../../../constants/icons';
import { withFirebase } from '../../../../containers/FireBase';
import * as styles from './ListUser.css';

const UserDetails = ({ name, img }) => (
  <Fragment>
    <div className={styles.nameSection}>
      <span className={styles.infoButton}>
        <IconButton aria-label="titter">
          <i className={icons.ellipsisV} />
        </IconButton>
      </span>
      <img
        src={`https://randomuser.me/api/portraits/men/${img}`}
        data-int="17"
        data-gender="men"
        className={styles.userImg}
      />
      <section className={styles.userNameSection}>
        <h1>{name}</h1>
        <p>Designer</p>
      </section>
      <div className={styles.iconWrapper}>
        <IconButton aria-label="titter">
          <i className={classNames(icons.twitter, styles.icon)} />
        </IconButton>
        <IconButton aria-label="gitlab">
          <i className={classNames(icons.gitLab, styles.icon)} />
        </IconButton>
        <IconButton aria-label="fb">
          <i className={classNames(icons.fb, styles.icon)} />
        </IconButton>
        <IconButton aria-label="whatsapp">
          <i className={classNames(icons.whatsApp, styles.icon)} />
        </IconButton>
        <IconButton aria-label="mail">
          <i className={classNames(icons.mail, styles.icon)} />
        </IconButton>
      </div>
    </div>
  </Fragment>
);

const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(doc => {
    returnArr.push({ id: doc.id, data: doc.data() });
  });

  return returnArr;
};

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.db
      .collection('user')
      .get()
      .then(users => {
        this.setState({ users: snapshotToArray(users), loading: false });
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        {loading && <div>Loader</div>}
        <div className={styles.usersWrapper}>
          {users.map(user => (
            <Card
              classes={{ container: styles.cardContainer }}
              child={<UserDetails name={user.data.name} img={user.data.img} />}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withFirebase(ListUser);
