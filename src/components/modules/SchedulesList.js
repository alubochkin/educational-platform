import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleItem from './ScheduleItem';
import { makeStyles } from '@material-ui/core/styles';
// import { getSchedulesThunk } from '../../redux/actions/actionSchedule';

const useStyles = makeStyles({
  schedulesList: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: '70% 1fr',
    borderBottom: '2px solid #33333321',
    paddingBottom: '10px',
  }
})

export default function SchedulesList({ id }) {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSchedulesThunk());
  // }, [dispatch]);

  const { schedules } = useSelector(state => state.scheduleReducer);
  let schedulesList = [];

  if (schedules) {
    schedulesList = schedules.filter((el) => el.phaseId === id);
  }

  return (
    <>
      {schedulesList && schedulesList.map((el, index) => {
        return (
          <div className={classes.schedulesList} key={Math.random()}>
            <ScheduleItem index={index} schedule={el} />

          </div>
        )
      })}
    </>
  )
}

