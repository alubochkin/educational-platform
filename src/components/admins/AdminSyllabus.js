import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Container, Button, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getModulesThunk, addModulesThunk } from '../../redux/actions/actionModules';
import ModuleList from '../modules/ModuleList';

const useStyles = makeStyles({
  container: {
    width: '50%',
    marginTop: '20px',
    padding: '5px',
    border: 'solid 1px #4253AF',
    borderRadius: '5px',
  },
  formItems: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px'
  },
});
function AdminSyllabus() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { spec } = useSelector((state) => state.specReducer);
  const { user } = useSelector(state => state.userReducer);

  const [syllabus, setSyllabus] = useState({});
  const [isAdding, setAdding] = useState(false);

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
    <div>
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

        <ModuleList spec={syllabus.syllabusSpec} />

        <Button
          onClick={addModuleHandler}
          variant="outlined"
          size="large"
          color="primary"
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
          >
            ОК
      </Button>
        </div>}
      </Container>
    </div>
  );
}
export default AdminSyllabus;