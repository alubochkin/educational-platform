import React, {useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Container, Button, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getModulesThunk, addModulesThunk } from '../../redux/actions/actionModules';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    padding: '5px',
    border: 'solid 1px #4253AF',
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
function AdminSyllabus() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { spec } = useSelector((state) => state.specReducer);
  
  const [syllabus, setSyllabus] = useState({});
  const [isAdding, setAdding] = useState(false);
  const { user } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getModulesThunk(user._id));
  }, [dispatch, user._id]);
  const handleChange = (event) => {
    setSyllabus((syllabus) => {
      return ({
        ...syllabus,
        [event.target.name]: event.target.value,
      })
    })
  }
  const addModuleHandler = () => {
    if (isAdding) {
      setAdding(false);
      if (syllabus.moduleTitle) {
        dispatch(addModulesThunk(syllabus.syllabusSpec, syllabus.moduleTitle, user._id));
      }
    } else {
      setAdding(true);
    }
  }
  
  return (
    <Container className={classes.container} maxWidth={false}>
      <h1>Учебная программа</h1>
      <InputLabel id="demo-controlled-open-select-label">Выберите направление</InputLabel>
      <div className={classes.formItems}>
        <Select
          required
          name="syllabusSpec"
          native
          value={syllabus.syllabusSpec}
          onChange={handleChange}
          >
          <option aria-label="None" value="" />
          {spec.map((el) => {
            return (
              <option key={Math.random()} value={el.title}>{el.title}</option>
            )
          })}
        </Select>
      </div>
      <Button
        onClick={addModuleHandler}
        variant="outlined"
        size="large"
        color="primary"
        className={classes.submit}
      >
        Добавить модуль
      </Button>
      {isAdding && <div> <TextField
        className={classes.textField}
        required
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        type="text"
        name="moduleTitle" label="Наименование модуля" />
        <Button
        onClick={addModuleHandler}
        variant="outlined"
        size="small"
        color="primary"
        className={classes.submit}
      >
        ОК
      </Button>
      </div>}
    </Container>
  );
}
export default AdminSyllabus;
