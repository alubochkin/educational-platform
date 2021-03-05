import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import Page404 from './pages/Page404';
import StudentOffice from './pages/StudentOffice';
import TeacherOfficePage from './pages/TeacherOfficePage';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegisterStudentToken from './pages/RegisterStudentToken';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/teacherOffice" component={TeacherOfficePage} />
          <Route exact path="/studentOffice" component={StudentOffice} />
          <Route exact path="/studentregistration/:token" component={RegisterStudentToken} />
          <Route path="/" component={Page404} />
        </Switch>
      </Router>

    </Provider>

  );
}

export default App;
