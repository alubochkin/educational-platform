/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TeacherOfficePage from './TeacherOfficePage';
import StudentAuth from '../components/AuthStudent/FormAuth';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

const useStyles = makeStyles({
  container_menu: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
  },
  menu: {
    display: "flex",
    marginTop: "30px",
    width: "1200px",
    margin: "30px auto",
    textAlign: "center",
  },
  boxNew:
  {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%"
  },
  link: {
    width: "400px",
    height: "150px",
    margin: "0 40px 40px 0",
    padding: "15px 10px",
    lineHeight: "40px",
    fontSize: "24px",
    textAlign: "center",
    border: "1px solid",
    borderRadius: "15px",
    textDecoration: "none"
  },
  logo: {
    display: "inline-block",
    verticalAlign: "middle",
    height: "80px",
    fontSize: "70px",
  }
});


const MainPage = () => {

  const { user } = useSelector(state => state.userReducer);

  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.content} maxWidth={false}>
        <div className={classes.container_menu}>
          <img src='images/main-page.jpg' alt='danya main-page' />
          {user.role === 3 && <div className={classes.menu}>
            <a className={classes.link} href="/userPage"><span className={classes.logo}>{<PersonOutlineOutlinedIcon />}</span>Личный кабинет</a>
            <a className={classes.link} href="/notifications"><span className={classes.logo}>{<NotificationsNoneOutlinedIcon />}</span>Оповещения</a>
            <a className={classes.link} href="/studentoffice"><span className={classes.logo}>{<SchoolOutlinedIcon />}</span>Кампус</a>
          </div>}
          {user.role === 2 && <div className={classes.menu}>
            <a className={classes.link} href="/userPage"><span className={classes.logo}>{<PersonOutlineOutlinedIcon />}</span>Личный кабинет</a>
            <a className={classes.link} href="/notifications"><span className={classes.logo}>{<NotificationsNoneOutlinedIcon />}</span>Оповещения</a>
            <a className={classes.link} href="/teacheroffice"><span className={classes.logo}>{<SchoolOutlinedIcon />}</span>Офис</a>
          </div>}
          {user.role === 1 && <div className={classes.menu}>
            <a className={classes.link} href="/adminPage"><span className={classes.logo}>{<PersonOutlineOutlinedIcon />}</span>Личный кабинет</a>
            <a className={classes.link} href="/notifications"><span className={classes.logo}>{<NotificationsNoneOutlinedIcon />}</span>Оповещения</a>
            <a className={classes.link} href="/adminOffice"><span className={classes.logo}>{<SchoolOutlinedIcon />}</span>Офис</a>
          </div>}
        </div>
        <div className={classes.boxNew}>
          <div><h1>Новости Elbrus Coding Bootcamp</h1></div>
          <div><h2>Встреча выпускников</h2></div>
          <div><h3>Курс алгоритмов</h3></div>
        </div>
      </Container>
    </React.Fragment>

  )
}

export default MainPage;
