/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TeacherSidebar from '../components/Sidebar/TeacherSidebar';
import CreateGroupForm from '../components/InvitedStudent/CreateGroupForm';
import SendInvitesForm from '../components/InvitedStudent/SendInvitesForm';

const TeacherOfficePage = () => {
  const state = useSelector(state => state.groupReducer);
  const isState = Object.keys(state).length ? true : false;
  
  console.log('state', state);
  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: 'calc(100vh - 150px)',
      background: 'none',
      paddingLeft: 0,
      display: 'flex',
      marginTop: '30px',
    },
    sidebar: {
      backgroundColor: "#f0f0f0",
    },
    content: {
      paddingLeft: '50px',
      width: '100%'
    }
  });
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <TeacherSidebar className={classes.sidebar} />
        <div className={classes.content}>
          <h1>TeacherOffice</h1>
          {!isState && <CreateGroupForm />}
          {isState && <SendInvitesForm />}
        </div>

      </Container>
    </React.Fragment>
  )
}

export default TeacherOfficePage;


