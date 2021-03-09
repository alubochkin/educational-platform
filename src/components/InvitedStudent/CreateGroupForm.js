import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Button, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addGroupThunk } from '../../redux/actions/actionGroup';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    padding: '5px',
    borderRadius: '5px',
  },
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
export default function CreateGroupForm({ handleclose }) {
  const { user } = useSelector((state) => state.userReducer);
  const history = useHistory();
  const backToGroups = () => {
    if (user.role === 1) {
      history.push('/adminOffice/groups');
    } else if (user.role === 2) {
      history.push('/teacheroffice/groups');
    }
  }
  const dispatch = useDispatch();
  const classes = useStyles();
  const { spec } = useSelector((state) => state.specReducer);
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
    dispatch(addGroupThunk(group, user._id));
    handleclose();
  }
  return (
    <Container className={classes.container} maxWidth={false}>
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
        <div>
          <Button type="submit"
            variant="outlined"
            size="large"
            color="primary"
            className={classes.submit}>
            Создать
          </Button>

          <Button
            variant="outlined"
            size="large"
            color="secondary"
            className={classes.submit}
            onClick={handleclose}>
            Отменить
           </Button>
        </div>

      </form>
    </Container>
  );
}
