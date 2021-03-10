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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "100%",
    maxHeight: "100%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
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
}));


const MainPage = () => {

  const { user } = useSelector(state => state.userReducer);

  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.content} maxWidth={false}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="danya main-page" src="images/main-page.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column">
                <Grid item>
                  {user.role === 3 && <a className={classes.link} href="/userPage"><span className={classes.logo}>{<PersonOutlineOutlinedIcon />}</span>Личный кабинет</a>}
                  {user.role === 2 && <a className={classes.link} href="/userPage"><span className={classes.logo}>{<PersonOutlineOutlinedIcon />}</span>Личный кабинет</a>}
                  {user.role === 1 && <a className={classes.link} href="/adminPage"><span className={classes.logo}>{<PersonOutlineOutlinedIcon />}</span>Личный кабинет</a>}
                  <Typography variant="body2" gutterBottom>
                    Новости Elbrus Coding Bootcamp
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Встреча выпускников
                </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Курс по алгоритмам
                </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Встреча с психологом
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs>
                {user.role === 3 && <a className={classes.link} href="/notifications"><span className={classes.logo}>{<NotificationsNoneOutlinedIcon />}</span>Оповещения</a>}
                {user.role === 2 && <a className={classes.link} href="/notifications"><span className={classes.logo}>{<NotificationsNoneOutlinedIcon />}</span>Оповещения</a>}
                {user.role === 1 && <a className={classes.link} href="/notifications"><span className={classes.logo}>{<NotificationsNoneOutlinedIcon />}</span>Оповещения</a>}
              </Grid>
              <Grid item xs>
                {user.role === 3 && <a className={classes.link} href="/studentoffice"><span className={classes.logo}>{<SchoolOutlinedIcon />}</span>Кампус</a>}
                {user.role === 2 && <a className={classes.link} href="/teacheroffice"><span className={classes.logo}>{<SchoolOutlinedIcon />}</span>Офис</a>}
                {user.role === 1 && <a className={classes.link} href="/adminOffice"><span className={classes.logo}>{<SchoolOutlinedIcon />}</span>Офис</a>}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>

  )
}

export default MainPage;
