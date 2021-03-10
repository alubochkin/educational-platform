import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { loginUserThunk } from '../redux/actions/actionUser';
import { addSpecAC } from '../redux/actions/actionSpec';

const useStyles = makeStyles({
  form: {
    margin: '0 auto',
    display: 'grid',
    maxWidth: '500px',
    marginTop: '100px',
    padding: '100px 100px',
    background: '#f0f0f0',
  },
  formItems: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px'
  },
  title: {
    color: '#3f51b5'
  },
  submit: {
    marginTop: '50px',
    maxWidth: 'max-content',
  }
});
export default function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const spec = useSelector((state) => state.specReducer);
  const [input, setInput] = useState({ email: '', password: '' });
  const handleChange = (event) => {
    setInput((input) => {
      return ({
        ...input,
        [event.target.name]: event.target.value,
      })
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(input));
    dispatch(addSpecAC());
    setInput({ email: '', password: '' })
  }
  return (
    <Container maxWidth={false}>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        validate="true">

        <h2 className={classes.title}>Войдите в систему</h2>

        <div className={classes.formItems}>
          <TextField
            onChange={handleChange} value={input.email}
            name="email" label="Email" type="email" required />

          <TextField
            onChange={handleChange} value={input.password}
            name="password" label="Пароль" type="password" required />
        </div>

        <Button type="submit"
          variant="outlined"
          size="large"
          color="primary"
          className={classes.submit}>
          Войти
        </Button>

      </form>
    </Container>
  );
}
