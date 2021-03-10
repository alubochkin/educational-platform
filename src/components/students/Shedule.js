/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Accordeon from './Accordeon';


const useStyles = makeStyles((theme) => ({
  namePage: {
    fontSize: 24,
    padding: 0,
    marginBottom: 50
  },
  titleModule: {
    fontSize: 24,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Shedule() {
  const classes = useStyles();
  const {idModule} = useParams();
  const { moduleStudent } = useSelector(state => state.userReducer);

  const module = moduleStudent.filter(module => {
    if(module.id === idModule) return module
  })

  console.log(module)


  const lessonDescriptionHandler = (id, title) => {
    
  }
  
  return (

    <>
      <h3 className={classes.namePage}>Программа: {module[0].title} </h3>
      {module[0].schedule.map((itemModule, index) =>
        <Accordeon index={index} moduleTitle={module.title}  itemModule={itemModule} key={itemModule._id} />
      )}

    </>

  )
}
export default Shedule;


