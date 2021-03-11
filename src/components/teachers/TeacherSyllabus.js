import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Select, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getModulesThunk } from '../../redux/actions/actionModules';
import ModuleList from '../modules/ModuleList';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    padding: '5px',
  },
  formItems: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px'
  },
  select: {
    padding: '5px 0',
    background: '#f0f0f0',
    margin: '30px 0',
  }
});
function TeacherSyllabus() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { spec } = useSelector((state) => state.specReducer);
  const { user } = useSelector(state => state.userReducer);

  const [syllabus, setSyllabus] = useState({syllabusSpec: "Fullstack JS"
  });
  const [isSelecting, setSelecting] = useState(true);

  const handleChange = (event) => {
    setSelecting(true);
    if (event.target.value === '') {
      setSelecting(false);
    }
    setSyllabus((syllabus) => {
      return ({
        ...syllabus,
        [event.target.name]: event.target.value,
      })
    });
  }
  console.log(spec)

  return (

    <Container className={classes.container} maxWidth={false}>

      <h1>Учебная программа</h1>
      <InputLabel id="demo-controlled-open-select-label">Выберите направление</InputLabel>
      <div className={classes.formWrap}>
        <div className={classes.formItems}>
          <Select
            className={classes.select}
            required
            name="syllabusSpec"
            native
            value={syllabus.syllabusSpec}
            onChange={handleChange}
          >
            {spec.map((el) => {
              return (
                <option key={Math.random()} value={el.title}>{el.title}</option>
              )
            })}
          </Select>
        </div>

        {isSelecting && <ModuleList spec={syllabus.syllabusSpec} /> }
      </div>
    </Container>
  );
}
export default TeacherSyllabus;
