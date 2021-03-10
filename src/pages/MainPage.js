/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TeacherOfficePage from './TeacherOfficePage';
import StudentAuth from '../components/AuthStudent/FormAuth';


const useStyles = makeStyles({
  mainPageBack: {
    background: 'url(https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?cs=srgb&dl=pexels-olia-danilevich-4974915.jpg&fm=jpg)',
    backgroundSize: '100%',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    filter:' blur(3px)',
  }
});


const MainPage = () => {

  const { user } = useSelector(state => state.userReducer);

  const classes = useStyles();

  return (

    <React.Fragment>
      <div className={classes.mainPageBack}></div>
      <Container className={classes.content} maxWidth={false}>

        <h2>Главная!</h2>

      </Container>
    </React.Fragment>

  )
}

export default MainPage;
