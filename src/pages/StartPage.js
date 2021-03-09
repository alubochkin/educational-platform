import React from 'react';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../components/LoginForm';
import MainPage from '../pages/MainPage';

// const useStyles = makeStyles((theme) => ({
//   wrapper: {

//   }

// }))

export default function StartPage() {
  // const classes = useStyles();
  let firstName = '';
  const { user } = useSelector(state => state.userReducer);

  if (user) {
    firstName = user.firstName 
  } 

  return (
    <div>
      {!firstName && <LoginForm />}
      {firstName && <MainPage />}
    </div>
  )
}

