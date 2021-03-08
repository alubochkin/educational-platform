/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Sidebar from '../components/Sidebar/TeacherSidebar';
import GroupsList from '../components/teachers/GroupsList';
import Syllabus from '../components/teachers/Syllabus';
import GroupUpdate from '../components/teachers/GroupUpdate';

const TeacherOfficePage = () => {
  const { path, url } = useRouteMatch();
  const { id } = useParams();

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
        <Sidebar className={classes.sidebar} />
        <div className={classes.content}>
          <Switch>
            <Route exact path={`${path}`}><Redirect to={`${path}/groups`} /></Route>
            <Route path={`${path}/groups`}><GroupsList url={url} /></Route>
            <Route path={`${path}/syllabus`}><Syllabus /></Route>
            <Route path={`${path}/updateGroup/:${id}`}> <GroupUpdate /> </Route>
          </Switch>

        </div>

      </Container>
    </React.Fragment>
  )
}

export default TeacherOfficePage;


