/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import News from '../components/InfoBlocksMainPage/News'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TeacherOfficePage from './TeacherOfficePage';
import StudentAuth from '../components/AuthStudent/FormAuth';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles({

  content: {
    maxWidth: '80%',
    display: 'grid',
    margin: '0 auto',
    marginTop: 100,
    gap: '15px 30px',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: '#ffffffd1',
    backdropFilter: 'blur(15px)',
    margin: 30
  }
});


const MainPage = () => {

  useEffect(()  => {
    document.body.classList.add('bg-body');
  
    return () => {
        document.body.classList.remove('bg-body');
    };
  });

  const { user } = useSelector(state => state.userReducer);

  const classes = useStyles();

  const dataNews = ['В 17:00 выпуск группы буткемпа', 'Новый гость в пятницу']

  const newsTeacher = ['1 новость', '2 новость']

  const today = ['Сегодня парное программирование', '2 новость']

  const notes = ['Методы массивов', 'Изучить flexbox']

  return (<>

      <Grid className={classes.content} container >
        <Grid className={classes.paper}>
          <News titleComponent="Новости в Bootcamp" dataComponent={dataNews}/>
        </Grid>

        <Grid className={classes.paper}>
          <News titleComponent="Оповещения от преподавателя" dataComponent={newsTeacher}/>
        </Grid>

        <Grid className={classes.paper} >
          <News titleComponent="Коротко о сегодня" dataComponent={today}/>
        </Grid>

        <Grid className={classes.paper} >
          <News titleComponent="Последние заметки" dataComponent={notes}/>
        </Grid>
    </Grid>


</>)
}

export default MainPage;
