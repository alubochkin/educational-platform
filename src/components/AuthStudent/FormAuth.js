import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { apiTokenSendAc,   registrationHandlerAc } from "../../redux/actions/actionsAuthStudent";
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

  const dispatch = useDispatch();
  const dataApi  = useSelector(state => state.dataApi);

  const classes = useStyles();

  const token = useParams();

  useEffect(() => {

    dispatch(apiTokenSendAc(token))

  }, [token, dispatch])

  const registrateStudentHandler = (e) => {
    e.preventDefault()
    dispatch(registrationHandlerAc(dataApi, e))
  }

  return (
    <div className={classes.wrappRegisterPage}>
      <div className={classes.titleRegister}>
        <h3>Группа: FOXES</h3>
        <h2>РЕСЕПШЕН БУТКЭМПА</h2>
        <small>Укажите ваши данные для регистрации</small>
      </div>
      <form onSubmit={registrateStudentHandler} className={classes.root} noValidate autoComplete="off">
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



