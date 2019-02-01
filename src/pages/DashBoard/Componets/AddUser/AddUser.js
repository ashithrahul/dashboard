import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import Card from '../../../../components/Card/Card';
import Input from '../../../../components/Input/Input';
import { FireBaseContext } from '../../../../containers/FireBase';

const Child = () => (
  <FireBaseContext.Consumer>
    {({ db }) => {
      db.collection('user')
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      return (
        <Fragment>
          <Input label="Name" />
          <Button variant="contained" color="primary">
            Done
          </Button>
        </Fragment>
      );
    }}
  </FireBaseContext.Consumer>
);

const AddUser = () => <Card child={<Child />} />;
export default AddUser;
