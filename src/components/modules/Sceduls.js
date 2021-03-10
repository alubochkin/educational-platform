import React from 'react';
import { TextField } from '@material-ui/core';


const Sceduls = () => {

  // const verification = () => {
  //   //returb bool
  // }

  const changeHandler = (e) => {
    //  console.log('verification', e.target.value)
  }

  return (
    <TextField
       InputLabelProps={{
                shrink: true,
              }}
      onChange={changeHandler}
      name="scedule" label="Наименование урока" />
  )
}

export default Sceduls;
