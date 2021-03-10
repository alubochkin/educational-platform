/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Sceduls from './Sceduls';
import { createSchedulsThunk } from '../../redux/actions/actionSchedule'
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

  },
  logo: {
    fontSize: '22px',
    width: 'max-content',
    color: '#3f51b5'
  }
});

export default function SceduleCreate({ id, title }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [dataSend, setDataSend] = useState({});
  const [createdInput, SetCreatedInput] = useState([<Sceduls className={classes.inputMail} />]);

  const addInputMail = () => {
    SetCreatedInput((prev) => {
      return [...prev, <Sceduls className={classes.inputMail} />]
    })
  }


  const submitHandler = (e) => {
    e.preventDefault();
    let scedules = [];
    if (e.target.scedule.length > 0) {
      Array.prototype.slice.call(e.target.scedule).forEach(mailInput => {
        scedules.push(mailInput.value);
      });
      setDataSend(scedules);
      dispatch(createSchedulsThunk(dataSend, id));

    }
  }

  return (
    <>
      <div className={classes.logo}>
        Добавить уроки <br /> <h5 style={{ textDecoration: 'under' }}>модуль: {title}</h5>
      </div>

      <form className={classes.formEmail} onSubmit={submitHandler}
        noValidate autoComplete="off">
        <div className={classes.mailCreateInputs}>
          {createdInput.map((_, i) => <Sceduls key={i} className={classes.inputMail} />)}
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
            Добавить урок
          </div>

          <Button className={classes.buttonivite}
            type="submit"
            variant="outlined"
            size="large"
            color="primary" >
            Сохранить (click twice)
          </Button>
        </div>
      </form>
    </>
  );
}

