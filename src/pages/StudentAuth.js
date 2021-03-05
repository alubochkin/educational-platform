/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormAuth from '../components/AuthStudent/FormAuth';
import Succes from '../components/AuthStudent/Succes';


const useStyles = makeStyles((theme) => ({
  
}));

export default function StudentAuth() {

  return (

    <>
      <FormAuth />
      <Succes />
    </>
  )
}
