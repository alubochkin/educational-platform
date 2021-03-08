/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TeacherOfficePage from './TeacherOfficePage';
import StudentAuth from '../components/AuthStudent/FormAuth';

const useStyles = makeStyles({
  content: {
  }
});


const MainPage = () => {

  const { user } = useSelector(state => state.userReducer);

  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.content} maxWidth={false}>

        <h2>Главная!</h2>
        <img src='images/main-page.jpg' alt='danya main-page' />
      </Container>
    </React.Fragment>

  )
}

export default MainPage;
