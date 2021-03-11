import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchMethod } from '../../redux/thunkUtils';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'
  },
  tableRowHead: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'
  }, 
  tableHead: {
    fontSize: 20,
    background: '#e3e3e3',
  }
});


export default function TableLessonComponent({lessondata}) {
  // const [lessonValue, setLessonValue] = useState({});

  // const { user } = useSelector(state => state.userReducer);
  // const { moduleStudent } = useSelector(state => state.userReducer);

  const classes = useStyles();

//   const getSheduleWeek = async () => {
//     try {
//       const response = await fetchMethod({
//         path: `http://localhost:3100/lesson/getphase`,
//         method: 'POST',
//         body: {
//           groupId: user.groupId,
//           phaseId: moduleStudent[0].id,
//           week: 1,
//         }
//     });
//     if (!response.error) {
//       setLessonValue(response)
//      ;
//     }
//   } catch (err) {
//     console.log('Err', err);
//   }
// }


//   getSheduleWeek() 


  function createData( day, lesson) {
    console.log(day, lesson, 'createData>>>>>>>>>>>>')
    return { day, lesson };
  }

  console.log(lessondata, 'lessondata************')

  const rows = [
    createData('Понедельник', lessondata[0]),
    createData('Вторник', lessondata[1]),
    createData('Среда', lessondata[2]),
    createData('Четверг', lessondata[3]),
    createData('Пятница', lessondata[4]),
  
  ];




  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.tableRowHead}>
            <TableCell className={classes.tableHead} align="left"> День недели </TableCell>
            <TableCell className={classes.tableHead} align="left"> Урок </TableCell>
  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.gridRow} key={row.day}>  
            {console.log(row, 'row----------') }          
              <TableCell key={Math.random()} 
                className={classes.tableCell} 
                size="small" align="left">
                  {row.day}
              </TableCell>
              <TableCell key={Math.random()}  
                className={classes.tableCell} 
                size="madium" align="left">
                  { row?.lesson.schTitle}
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
