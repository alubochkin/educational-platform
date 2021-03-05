/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import StudentAuth from './StudentAuth';
import TeacherOfficePage from './TeacherOfficePage';

const useStyles = makeStyles({
  content: {
  }
});


const MainPage = () => {

  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.content} maxWidth={false}>

        <TeacherOfficePage />
        {/* <StudentAuth /> */}
      </Container>
    </React.Fragment>

  )
}

export default MainPage;
