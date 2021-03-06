import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import  {Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';
import Page404 from './pages/Page404';
import StudentOffice from './pages/StudentOffice';
import TeacherOfficePage from './pages/TeacherOfficePage';

import RegisterStudentToken from './pages/RegisterStudentToken';

const App = () => {

  let role = 0;
  const { user } = useSelector(state => state.userReducer);

  if (user) {
    role = user.role;
  }

  return (

    <Router>
      <Header />

      <Switch>

        <Route exact path="/">
          {!role ? <Redirect to="/startPage" /> : <MainPage />}
        </Route>

        <Route exact path="/startPage" component={StartPage} />

        <Route path="/teacherOffice">
          {role === 2 ? <TeacherOfficePage /> : <Redirect to="/startPage" />}
        </Route>

        <Route path="/studentoffice">
          {role === 3 ? <StudentOffice /> : <Redirect to="/startPage" />}
        </Route>

        <Route exact path="/studentregistration/:token" component={RegisterStudentToken} />
        <Route path="/" component={Page404} />
      </Switch>
    </Router>

  );
}

export default App;
