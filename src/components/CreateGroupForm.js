import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Button, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addGroupThunk } from '../redux/actions/actionGroup';

const useStyles = makeStyles({
  form: {
    maxWidth: '80%',
    margin: '0 auto',
    display: 'grid',
  },
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
  return (
    <Container maxWidth={false}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addGroupThunk(group))
        }
        }

        className={classes.form}
        validate="true">
        <InputLabel id="demo-controlled-open-select-label">Выберите направление</InputLabel>
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

        <div>
          <TextField

            onChange={handleChange}
            name="groupTitle" id="outlined-basic" label="Название группы" required />
        </div>

        <div>
          <TextField
            required
            onChange={handleChange}
            type="date"
            name="dateStart" id="outlined-basic" label="Дата старта" />
          <TextField
            required
            onChange={handleChange}
            type="date"
            name="dateFinish" id="outlined-basic" label="Дата окончания" />
        </div>

        <div>
          <Button
            type="submit"

            variant="contained">
            Создать
          </Button>
        </div>
      </form>


    </Container>
  );
}
