import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import NavigationTopStudent from './NavItemsStudent';
import NavigationTopTeacher from './NavItemsTeacher';
import NavigationTopAdmin from './NavItemsAdmin';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    background: 'none',
  },
  header: {
    backgroundColor: '#3f51b5',
    height: 'max-content',
    padding: '10px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '18px',
    width: 'max-content',
    color: '#fff',
    textDecoration: 'none',
  }
});

const Header = () => {
  const classes = useStyles();

  let role = 0;
  const { user } = useSelector(state => state.userReducer);

  if (user) {
    role = user.role;
  }

  return (
    <a className={classes.header}>
      <a href="/" className={classes.logo}>
        Онлайн образование
      </a>
      {role === 3 && <NavigationTopStudent />}
      {role === 2 && <NavigationTopTeacher />}
      {role === 1 && <NavigationTopAdmin />}
    </a>
  )
}

export default Header;
