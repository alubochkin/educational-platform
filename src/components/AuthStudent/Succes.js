import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '850px',
    margin: '0 auto',
    padding: '50px 0',
    display: 'grid',
    gap: 30,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3f51b5',
  },
  subtitle: {
    fontSize: 18,
    color: '#3f51b5',
  },

}))

const Succes = () => {
  const classes = useStyles();



  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Поздравляем тебя! </div>
      <div className={classes.subtitle}>Ты теперь студент буткемпа </div>

      <Button type="submit" 
      component={Link}
      to="/studentoffice"
      variant="outlined" 
      size="large" 
      color="primary" 
      className={classes.inCampus}>
      Войти в кампус
        </Button>
    </div>
  )
}

export default Succes;
