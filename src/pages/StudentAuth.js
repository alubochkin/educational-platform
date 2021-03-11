/* eslint-disable no-unused-vars */
import React from 'react';

import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import FormAuth from '../components/AuthStudent/FormAuth';
import Succes from '../components/AuthStudent/Succes';


const useStyles = makeStyles((theme) => ({
  
}));

export default function StudentAuth() {

  const { user }   = useSelector(state => state.userReducer);

  return (

    <>
      { !user?._id && <FormAuth />}
      { user?._id &&<Succes /> }
    </>
  )
}
