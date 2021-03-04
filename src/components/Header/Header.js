import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationTopStudent from './NavItemsStudent';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    background: 'none',
  },
  header: {
    backgroundColor: '#f0f0f0',
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
    fontSize: '22px',
    width: 'max-content',
    color: '#3f51b5'
  }
});

const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>ODU Project</div>
      <NavigationTopStudent />
    </div>
  )
}

export default Header;
