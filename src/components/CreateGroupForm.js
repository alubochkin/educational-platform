import React from 'react';
import { Container, TextField, Button, Select, MenuItem } from '@material-ui/core';

export default function CreateGroupForm() {

  const handleChange = () => {
    console.log('select changed');
  }

  return (
    <Container maxWidth="sm">
      <form
         noValidate autoComplete="off">

        <div >
          <Select
            labelId="program"
            id="edu-program"
            // value={age}
            onChange={handleChange}
            label="Направление"
          >
            <MenuItem value="Выберите направление">
              <em>Выберите направление</em>
            </MenuItem>
            <MenuItem value={'Fullstack JS'}>Fullstack JS</MenuItem>
            <MenuItem value={'Fullstack JS Online'}>Fullstack JS Online</MenuItem>
            <MenuItem value={'Data Science'}>Data Science</MenuItem>
          </Select>
        </div>

        <div>
          <TextField
            id="outlined-basic" label="Название группы" />
        </div>

        <div>
          <TextField
            id="outlined-basic" label="Дата старта" />
          <TextField
            id="outlined-basic" label="Дата окончания" />
        </div>

        <div>
          <Button
            variant="contained">
            Создать
          </Button>
        </div>

      </form>
    </Container>
  );
}
