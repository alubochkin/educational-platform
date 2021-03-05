import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  buttonSubmit: { 
    display: 'grid',
    marginTop: '30px',
    gridTemplateColumns: '1fr 1fr 1fr',
  
  }
});

export default function SendInvitesForm() {
  const classes = useStyles();
  const state = useSelector(state => state.groupReducer);
  console.log('group', state.group)
 
  const [input, setInput] = useState({ email1: '', email2: '', email3: '' });
  const changeHandler = ({ target }) => {
    setInput((input) => {
      return {
        ...input,
        [target.name]: target.value
      }
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('input', input);
    // какой-то fetch

    setInput(() => {
      return { email1: '', email2: '', email3: '' }
    });
  }

  return (
    <Container maxWidth="sm">
      <h2>Группа {state.group.groupTitle} создана!</h2>
      <h2>*ссылка*</h2>
      <h2>отправить ссылки студентам:</h2>
      <form
        noValidate autoComplete="off">

        <TextField
          onChange={changeHandler}
          name="email1" label="E-mail студента" value={input.email1} />
        <TextField
          onChange={changeHandler}
          name="email2" label="E-mail студента" value={input.email2} />
        <TextField
          onChange={changeHandler}
          name="email3" label="E-mail студента" value={input.email3} />

        <div>
          <Button
            onClick={submitHandler}
            variant="contained">
            Отправить приглашения
          </Button>
        </div>

      </form>
    </Container>
  );
}
