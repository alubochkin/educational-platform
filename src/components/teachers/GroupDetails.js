import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groupDetailsThunk } from '../../redux/actions/actionGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemModalWrapp: {
    width: '100%'
  },
  itemModalText: {
    fontSize: '17px',
    padding: '7px 0',
    borderBottom: '1px solid #ccc',
    width: '100%'
  },
  itemModalTitle: {
    color: '#7682c5'
  }

}));

export default function GroupDetails({ group }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { students } = useSelector(state => state.groupReducer)

  useEffect(() => {
    dispatch(groupDetailsThunk(group._id));
  }, [dispatch, group._id]);

  return (
    <div className={classes.itemModalWrapp}>
      <div className={classes.itemModalText}>
        <span className={classes.itemModalTitle}> Название группы: </span> {group.groupTitle}
        </div>
      <div className={classes.itemModalText}>
        <span className={classes.itemModalTitle}> Направление обучения: </span> {group.groupSpec}
        </div>
      <div className={classes.itemModalText}>
        <span className={classes.itemModalTitle}>Дата старта: </span> {group.strDateStart}
        </div>
      <div className={classes.itemModalText}>
        <span className={classes.itemModalTitle}>Дата окончания: </span> {group.strDateFinish}
        </div>

      {students && <ul>
        {students.map((student) => {
          return (<>
            <span>{student.firstName}</span>
            <span>{student.lastName}</span>
            <br />
          </>)
        })}
      </ul>}
    </div>
  )
}

