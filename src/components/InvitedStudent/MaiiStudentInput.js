import React from 'react';
import { TextField } from '@material-ui/core';


const MaiiStudentInput = () => {

  const verification = () => {
    //returb bool
  }

  const changeHandler = (e) => {
    //  console.log('verification', e.target.value)
  }

  return (
    <TextField
      onChange={changeHandler}
      name="email" label="E-mail студента" />
  )
}

export default MaiiStudentInput
