import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';

export default function SendInvitesForm() {
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
      <h2>Группа Foxes создана!</h2>
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
