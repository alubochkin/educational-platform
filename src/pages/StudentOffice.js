import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SidebarLeft from '../components/Sidebar/StudentSidebar';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import Shedule from '../components/students/Shedule.js';

const StudentOffice = () => {
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
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <SidebarLeft className={classes.sidebar} />
        <div className={classes.content}>
          <Switch>
            <Route exact path={`${path}`}><Redirect to={`${path}/shedule`} /></Route>
            <Route path={`${path}/shedule`}><Shedule /></Route>
            {/* <Route path={`${path}/groupadd`}>{!isState ? <CreateGroupForm /> : <SendInvitesForm />}</Route>
            <Route path={`${path}/syllabus`}><Syllabus /></Route> */}
          </Switch>
        </div>

      </Container>

    </React.Fragment>
  )
}

export default StudentOffice;
