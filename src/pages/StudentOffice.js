import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SidebarLeft from '../components/Sidebar/StudentSidebar';
import Shedule from '../components/students/Shedule.js';
import { fetchMethod } from '../redux/thunkUtils';

const StudentOffice = () => {
  const { user } =  useSelector(state => state.userReducer);
  const { path } = useRouteMatch();

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
    console.log(user.groupId)
    
    try {
      fetchMethod({
        path: `/schedule/${user.groupId}`,
        method: 'GET',
        // body: { groupId: user.groupId }
      }).then((res) => console.log(res) )
  
    } catch (err) {
      console.log('Err', err);
    }
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <SidebarLeft className={classes.sidebar} />
        <div className={classes.content}>

          <Switch>
            <Route path={`${path}/shedule`}><Shedule /></Route>
          </Switch>
        </div>

      </Container>

    </React.Fragment>
  )
}

export default StudentOffice;
