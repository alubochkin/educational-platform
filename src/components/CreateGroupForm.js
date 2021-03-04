import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TextField, Button, Select, FormControl , InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { groupAddThunk } from '../redux/actions/actionGroup';

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
  // const handleChange = (event) => {
  //   console.log('select changed', event.target.value);
  // }
  // const [spec, setSpec] = useState();
  const spec = useSelector((state) => state.spec);
  const handleChange = (event) => {
        
  };


// 
  return (
    <Container maxWidth={false}>
      <FormControl className={classes.form}>
        <InputLabel id="demo-controlled-open-select-label">Выберите направление</InputLabel>
        <Select
          native
          value={spec}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          <option value={'Fullstack JS'}>Fullstack JS</option>
          <option value={'Fullstack JS Online'}>Fullstack JS Online</option>
          <option value={'Data Science'}>Data Science</option>
        </Select>

        <div>
          <TextField
            name="groupTitle" id="outlined-basic" label="Название группы" />
        </div>

        <div>
          <TextField
            name="dateStart" id="outlined-basic" label="Дата старта" />
          <TextField
            name="dateFinish" id="outlined-basic" label="Дата окончания" />
        </div>

        <div>
          <Button
            // onclick={()=>dispatch(groupAddThunk())}
            variant="contained">
            Создать
          </Button>
        </div>
      </FormControl>

     
    </Container>
  );
}
