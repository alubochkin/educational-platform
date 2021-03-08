import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { groupDetailsThunk } from '../../redux/actions/actionGroup';

export default function GroupDetails({ group }) {
  const dispatch = useDispatch();
  const { students } = useSelector(state => state.groupReducer)

  useEffect(() => {
    dispatch(groupDetailsThunk(group._id));
  }, [dispatch, group._id]);

  return (
    <div>
      <span>Название группы: {group.groupTitle}</span>
      <span>Направление обучения: {group.groupSpec}</span>
      <span>Дата старта: {group.strDateStart}</span>
      <span>Дата окончания: {group.strDateFinish}</span>
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

