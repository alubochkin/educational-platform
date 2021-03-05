import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header/Header';

export default function StartPage() {
  const currentUser = useSelector(state => state.userReducer);
  const { firstName } = currentUser;
  return (
    <div>
      <h2>StartPage - войдите в систему</h2>
      {!firstName && <LoginForm />}
      {firstName && <Header />}
    </div>
  )
}

