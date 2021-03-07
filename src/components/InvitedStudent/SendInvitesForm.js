/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, TextField, Button, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaiiStudentInput from './MaiiStudentInput';
import AddIcon from '@material-ui/icons/Add';

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
  },
  formEmail: {
    display: 'grid',
    gap: 30,
    margin: '50px 0',
  },
  groupButton: {
    width: '100%',
    display: 'flex',
    gap: 40,
    justifyContent: 'space-between',
  },
  addInputMail: {
    width: 'max-content',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    alignItems: 'center',
  },
  buttonivite: {
    width: 'max-content'
  },
  inputMail: {
    maxWidth: '25%'
  },
  mailCreateInputs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: 30,

  }
});

export default function SendInvitesForm() {
  const classes = useStyles();
  const { group } = useSelector(state => state.groupReducer);

  console.log(group)

  const [dataSend, setDataSend] = useState({});

  const [createdInput, SetCreatedInput] = useState([<MaiiStudentInput className={classes.inputMail} />]);

  const addInputMail = () => {
    SetCreatedInput((prev) => {
      return [...prev, <MaiiStudentInput className={classes.inputMail} />]
    })
  }


  const submitHandler = (e) => {
    e.preventDefault();
    let emails = []
    if (e.target.email.length > 0) {
      Array.prototype.slice.call(e.target.email).forEach(mailInput => {
        emails.push(mailInput.value);
      })
    } else {
      emails = [e.target.email.value];
    }
    setDataSend(() => {
      return { emails, groupId: group.groupId }
    })
  }

  useEffect(() => {

    const requestDataStudent = async (path, sendData) => {
      // loader
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

    requestDataStudent('/sendmsg', dataSend)
       .then((response) => console.log(response))

  }, [dataSend])

  return (
    <>
      <h2>Группа {group.groupTitle} создана!</h2>
      <h2>отправить приглашение студентам:</h2>

      <form className={classes.formEmail} onSubmit={submitHandler}
        noValidate autoComplete="off">
        <div className={classes.mailCreateInputs}>
          {createdInput.map((_, i) => <MaiiStudentInput key={i} className={classes.inputMail} />)}
        </div>

        <div className={classes.groupButton}>
          <div className={classes.addInputMail}>
            <Fab size="small"
              onClick={addInputMail}
              color="secondary"
              aria-label="add"
              className={classes.margin}>
              <AddIcon />
            </Fab>
            Добавить почту
          </div>

          <Button className={classes.buttonivite}
            type="submit"
            variant="outlined"
            size="large"
            color="primary" >
            Отправить приглашения
          </Button>
        </div>
      </form>
    </>
  );
}

