import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScheduleItem from './ScheduleItem';
import { getSchedulesThunk } from '../../redux/actions/actionSchedule';



export default function SchedulesList({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedulesThunk());
  }, [dispatch]);

  const { schedules } = useSelector(state => state.scheduleReducer);
  let schedulesList = [];

  if (schedules) {
    schedulesList = schedules.filter((el) => el.phaseId === id);
  }

  return (
    <div>
      {schedulesList && schedulesList.map((el) => {
        return (
          <div key={Math.random()}>
            <ScheduleItem schedule={el} />

          </div>
        )
      })}
    </div>
  )
}

