/* eslint-disable no-unused-vars */
import React from 'react';
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
  mainPageBack: {
    background: 'url(https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?cs=srgb&dl=pexels-olia-danilevich-4974915.jpg&fm=jpg)',
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    filter:' blur(3px)',
  },
  content: {
    marginTop: 50,
    display: "grid",
    gridTemplateColumns: '1fr 1fr'
  },
  paper: {
    backgroundColor: '#ffffffd1',
    backdropFilter: 'blur(15px)',
    margin: 30
  }
});


const MainPage = () => {

  const { user } = useSelector(state => state.userReducer);

  const classes = useStyles();

  const dataNews = ['1 новость', '2 новость']

  const newsTeacher = ['1 новость', '2 новость']

  const today = ['1 новость', '2 новость']

  const notes = ['1 новость', '2 новость']

  return (<>

      <div className={classes.mainPageBack}></div>

      <Grid className={classes.content} container >
        <Grid className={classes.paper}>
          <News titleComponent="Новости в Bootcamp" dataComponent={dataNews}/>
        </Grid>

        <Grid className={classes.paper}>
          <News titleComponent="Оповещения от преподователя" dataComponent={newsTeacher}/>
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
