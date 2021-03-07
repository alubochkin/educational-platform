import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
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
    display: 'grid',
    gap: 12,
  },
  submit: {
    maxWidth: '200px',
    margin: 0,
  }
}));

export default function StudentAuth() {

  const classes = useStyles();

  const [mailTokenIdgroup, setmailTokenIdgroup] = useState({})

  const token = useParams();
  console.log(token)
 

  useEffect(() => {

    const requestDataStudent = async (path, sendData) => {
      try {
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendData)
        });

        if (response.status === 200) return await response.json();
        else return new Error(response.err)
      } catch (err) {
        console.log('Error: ', err);
      }
    }

    (async () => {
      await requestDataStudent('/sendmsg/token', token)
        .then((response) => setmailTokenIdgroup(response))
    })()

  }, [token])


  const registrationHandler = async (e) => {
    e.preventDefault();
    const { name, lastname, password } = e.target;

    const dataStudentAll = {
      firstName: name.value,
      lastName: lastname.value,
      pass: password.value,
      role: 3,
      groupName: '',
      ...mailTokenIdgroup
    }

    // console.log(dataStudentAll)

    const sendStudentRegistration = async (path, sendData) => {
      try {
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendData)
        });

        if (response.status === 200) return await response.json();
        else return new Error(response.err)
      } catch (err) {
        console.log('Error: ', err);
      }
    }

    sendStudentRegistration('/auth/signup', dataStudentAll)
      .then((response) => console.log(response))

  }


  return (
    <div className={classes.wrappRegisterPage}>
      <div className={classes.titleRegister}>
        <h3>Группа: FOXES</h3>
        <h2>РЕСЕПШЕН БУТКЭМПА</h2>
        <small>Укажите ваши данные для регистрации</small>
      </div>
      <form onSubmit={registrationHandler} className={classes.root} noValidate autoComplete="off">
        <div className={classes.groupformItem}>
          <TextField name="name" id="name" label="Ваше имя" />
          <TextField name="lastname" id="last-name" label="Ваша Фамилия" />
        </div>
        <div className={classes.groupformItem}>
          <TextField name="password" type="password" id="password" label="Придумате пароль" />
          <TextField type="password" id="repassword" label="Повторите пароль" />
        </div>

        <Button type="submit"
          variant="outlined"
          size="large"
          color="primary"
          className={classes.submit}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}

// {
//   token,
//   email,
//   groupId,
//  firstName
  // lastName,
 // password
// } fetch post /auth/signup


