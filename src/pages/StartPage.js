import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import MainPage from '../pages/MainPage';

export default function StartPage() {
  let firstName = '';
  const { user } = useSelector(state => state.userReducer);

  if (user) {
    firstName = user.firstName;
  }

  return (
    <div>
      {!firstName && <LoginForm />}
      {firstName && <MainPage />}
    </div>
  )
}

