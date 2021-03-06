import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Button, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addGroupThunk } from '../../redux/actions/actionGroup';

const useStyles = makeStyles({
  form: {
    maxWidth: '80%',
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
export default function CreateGroupForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const spec = useSelector((state) => state.specReducer);
  const [group, setGroup] = useState({});
  const handleChange = (event) => {
    setGroup((group) => {
      return ({
        ...group,
        [event.target.name]: event.target.value,
      })
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // добавить дополнительные проверки
    dispatch(addGroupThunk(group))
  }
  return (
    <Container className="content-with-sidebar" maxWidth={false}>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        validate="true">
        <InputLabel id="demo-controlled-open-select-label">Выберите направление</InputLabel>
        <div className={classes.formItems}>
          <Select
            required
            name="groupSpec"
            native
            value={group.groupSpec}
            onChange={handleChange}
          >
            <option aria-label="None" value="" />
            {spec.map((el) => {
              return (
                <option key={Math.random()} value={el.title}>{el.title}</option>
              )
            })}
          </Select>

          <TextField
            onChange={handleChange}
            name="groupTitle" id="outlined-basic" label="Название группы" required />
        </div>

        <div className={classes.formItems}>
          <TextField
            className={classes.textField}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            type="date"
            name="dateStart" id="outlined-basic" label="Дата старта" />
          <TextField
            className={classes.textField}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            type="date"
            name="dateFinish" id="outlined-basic" label="Дата окончания" />

        </div>
        <Button type="submit"
          variant="outlined"
          size="large"
          color="primary"
          className={classes.submit}>
          Создать
        </Button>

      </form>
    </Container>
  );
}
