import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Button, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addGroupThunk } from '../redux/actions/actionGroup';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

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
  const handleSubmit = (event) => {
    event.preventDefault();
    // добавить дополнительные проверки
    dispatch(addGroupThunk(group))
  }
  return (
    <Container maxWidth={false}>
      <form
        onSubmit={handleSubmit}
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

          {/* <MuiPickersUtilsProvider>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              onChange={handleChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider> */}
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
