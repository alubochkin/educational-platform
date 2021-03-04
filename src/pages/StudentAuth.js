import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  wrappRegisterPage: {
    maxWidth: '850px',
    margin: '0 auto',
  },
  groupformItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    margin: '50px 0',
  },
  titleRegister: {
    color: '#3f51b5',
    marginBottom: '50px',
    borderBottom: '1px solid',
    padding: '10px 0',
  },
  submit: {
    maxWidth: '200px',
    margin: 0,
  }
}));

export default function StudentAuth() {

  const [reqDataStudent, SetReqDataStudent] = React.useState({})

  React.useEffect(() => {

    const requestDataStudent = async () => {
      try {
        const data = await fetch('/auth/token');
        return await data.json();
      } catch(err) {
        console.log('Error: ', err);
      }

    }


  }, [])




  const classes = useStyles();

  const registrationHandler = (e) => {
    e.preventDefault();

    console.log(e.target)
  }
    

  return (
    <div className={classes.wrappRegisterPage}>
      <div className={classes.titleRegister}>
        <h3>Группа: FOXES</h3>
        <h2>Укажите ваши данные для регистрации</h2>
        <small>РЕСЕПШЕН БУТКЭМПА</small>
      </div>
      <form onSubmit={registrationHandler} className={classes.root} noValidate autoComplete="off">
        <div className={classes.groupformItem}>
          <TextField id="standard-basic" label="Ваше имя" />
          <TextField id="standard-basic" label="Ваша Фамилия" />
        </div>
        <div className={classes.groupformItem}>
          <TextField type="password" id="standard-basic" label="Придумате пароль" />
          <TextField type="password" id="standard-basic" label="Повторите пароль" />
        </div>

        <Button type="submit" 
          variant="outlined" 
          size="large" 
          color="primary" 
          className={classes.submit}>
          Зарегестрироваться
        </Button>
      </form>
    </div>
  );
}


// Для регистрации http://localhost:3100/auth/student/signup body:{firstName=test,
// lastName=test,
// email=t1@t1.ru,
// password=123,
// role=1,
// groupName=апрапрпарпа,
// groupId=5}