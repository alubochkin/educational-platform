import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';
import Page404 from './pages/Page404';
import StudentOffice from './pages/StudentOffice';
import TeacherOfficePage from './pages/TeacherOfficePage';

import RegisterStudentToken from './pages/RegisterStudentToken';
import { Container } from '@material-ui/core';
import Sidebar from './components/Sidebar/Sidebar';
import CreateGroupForm from './components/InvitedStudent/CreateGroupForm';

const App = () => {

  let role = 0;
  const { user } = useSelector(state => state.userReducer);

  if (user) {
    role = user.role;
  }

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

    <Router>
      <Header />

      <Container className={classes.root} maxWidth={false}>
      <Sidebar className={classes.sidebar}/>

      <Switch>

        <Route exact path="/">
          {!role ? <Redirect to="/startPage" /> : <MainPage />}
        </Route>

        <Route exact path="/startPage" component={StartPage} />

        <Route path="/creategroup" exact component={CreateGroupForm} />

        <Route exact path="/teacherOffice">
          {role === 2 ? <TeacherOfficePage /> : <Redirect to="/startPage" />}
        </Route>

        <Route exact path="/studentOffice">
          {role === 3 ? <StudentOffice /> : <Redirect to="/startPage" />}
        </Route>

        <Route exact path="/studentregistration/:token" component={RegisterStudentToken} />
        <Route path="/" component={Page404} />
      </Switch>
      </Container>
    </Router>



  );
}

export default App;
