import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { loginUserThunk } from '../redux/actions/actionUser';

const useStyles = makeStyles({
  form: {
    maxWidth: '80%',
    margin: '0 auto',
    display: 'grid',
  },
  formItems: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px'
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
    setInput({ email: '', password: '' })
  }
  return (
    <Container maxWidth={false}>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        validate="true">
          
        <h2>Войдите в систему</h2>

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
