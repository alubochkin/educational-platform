import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
// import { updateModuleThunk } from '../../redux/actions/actionModules';
// import Modal from '@material-ui/core/Modal';
// import SceduleCreate from './SceduleCreate';


const useStyles = makeStyles((theme) => ({
  update: {
    border: '1px solid',
    marginLeft: '200px',
  },
  
}));

export default function ScheduleItem({ schedule }) {
  const classes = useStyles();
  
  const dispatch = useDispatch();

  
  return (
    <div>
    {schedule.title}  
    </div>

      
  )
}

