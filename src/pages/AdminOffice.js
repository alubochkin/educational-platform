/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import CreateGroupForm from '../components/InvitedStudent/CreateGroupForm';
import SendInvitesForm from '../components/InvitedStudent/SendInvitesForm';
import GroupsList from '../components/teachers/GroupsList';
import AdminSyllabus from '../components/admins/AdminSyllabus';

const AdminOffice = () => {
  const state = useSelector(state => state.groupReducer);
  const isState = Object.keys(state).length ? true : false;
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
        <AdminSidebar className={classes.sidebar} />
        <div className={classes.content}>
          <Switch>
            {/* <Route exact path={`${path}`}><Redirect to={`${path}/groups`} /></Route> */}
            {/* <Route path={`${path}/groups`}><GroupsList /></Route> */}
            {/* <Route path={`${path}/groupadd`}><CreateGroupForm /></Route> */}
            <Route path={`${path}/syllabus`}><AdminSyllabus /></Route>
          </Switch>

        </div>

      </Container>
    </React.Fragment>
  )
}

export default AdminOffice;


