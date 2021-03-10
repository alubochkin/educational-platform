/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  namePage: {
    fontSize: 24,
    padding: 0,
    marginBottom: 50
  },
  titleModule: {
    fontSize: 24,

  }
}));

function Shedule() {
  const classes = useStyles();
  const {idModule} = useParams();
  const { moduleStudent } = useSelector(state => state.userReducer);
  console.log('Koca: id ', idModule, moduleStudent);

  const module = moduleStudent.filter(module => {
    if(module.id === idModule) return module
  })

  console.log('module', module[0])
  
  return (

    <>
      <h3 className={classes.namePage}>Моя программа обучения</h3>
      <TableContainer component={Paper}>
      <TableHead>
          <TableRow>
            <TableCell className={classes.titleModule}>
              {module[0].title}
              </TableCell>
          </TableRow>
      </TableHead>

      <TableBody>
        {module[0].schedule.map((itemModule, index) =>
        <TableRow key={itemModule._id}>
           <TableCell key={index} component="th" scope="row">{itemModule.title} </TableCell>
        </TableRow>
         )}
      </TableBody>
      </TableContainer>

    </>

  )
}
export default Shedule;

