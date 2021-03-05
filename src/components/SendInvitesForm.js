/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Mail from 'nodemailer/lib/mailer';

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/sendmsg', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ emails: ['kolb2006puma@mail.ru', 'alubochkin@ya.ru'], groupId: '23zcxzt676z7fzx' })
      });
      const data = await response.json();
      console.log(data);


    } catch (err) {
      console.log('Err', err);
    }
  }

  return (
    <Container maxWidth="sm">
      <h2>Группа {state.group.groupTitle} создана!</h2>
      <h2>отправить приглашение студентам:</h2>
      <form onSubmit={submitHandler}
        noValidate autoComplete="off">

        <TextField
          onChange={changeHandler}
          name="email" label="E-mail студента" />
        <div>
          <Button type="submit"
            variant="contained">
            Отправить приглашения
          </Button>
        </div>

      </form>
    </Container>
  );
}

// {
//   emais: [
// 'mail', 'gmail'
// ],
//   grouId
// }

// Mail, -> token  => mail & token -> {firstName, mail, token, ......}
