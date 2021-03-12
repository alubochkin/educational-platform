/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchMethod } from '../../redux/thunkUtils';
import TableLessonComponent from './TableLessonComponent';

const CalendarShedule = () => {
  const [lessonValue, setLessonValue] = useState(false);
  const { user } = useSelector(state => state.userReducer);
  const { moduleStudent } = useSelector(state => state.userReducer);


  const getSheduleWeek = async () => {
      try {
        const response = await fetchMethod({
          path: `http://localhost:3100/lesson/getphase`,
          method: 'POST',
          body: {
            groupId: user.groupId,
            phaseId: moduleStudent[0].id,
            week: 1,
          }
      });
      if (!response.error) {
        console.log(response)
        setLessonValue(response)
       ;
      }
    } catch (err) {
      console.log('Err', err);
    }
  }

  useEffect(() => {
    getSheduleWeek() 
  }, [])

  // console.log(lessonValue)

  return (
    <div>
      {lessonValue && <TableLessonComponent lessondata={lessonValue}/>}
    </div>
  )
}

export default CalendarShedule

// http://localhost:3100/lesson/getphase - список всего расписания группа + phase + week
// groupId = 6045040f4fa2c5740d2f7a69
// phaseId = 604628754b84357d8d1c1ec7 body: {week: 1}
// week = 1 //1 или 2 -недели.  Залила расписание только на две первые недели первой фазы (edited)