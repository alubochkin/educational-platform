import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SidebarLeft from '../components/Sidebar/StudentSidebar';
import Shedule from '../components/students/Shedule.js';
import CalendarShedule from '../components/students/CalendarShedule';
import { getModuleStudent } from '../redux/actions/actionUser';
import { MainNote } from '../components/notes/MainNote';

const StudentOffice = () => {

  const { user } = useSelector(state => state.userReducer);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getModuleStudent(user.groupSpec))

  }, [dispatch, user.groupSpec]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <SidebarLeft className={classes.sidebar} />
        <div className={classes.content}>

          <Switch>
            <Route path={`${path}/calendarShedule`}><CalendarShedule /></Route>
            <Route path={`${path}/shedule/:idModule`}><Shedule /></Route>
            <Route path={`${path}/notes`}><MainNote /></Route>
          </Switch>
        </div>

      </Container>

    </React.Fragment>
  )
}

export default StudentOffice;
