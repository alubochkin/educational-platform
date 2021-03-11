import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleItem from './ScheduleItem';
import { makeStyles } from '@material-ui/core/styles';
// import { getSchedulesThunk } from '../../redux/actions/actionSchedule';

const useStyles = makeStyles({
  schedulesList: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns:' 8fr 1fr',
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
      {schedulesList && schedulesList.map((el) => {
        return (
          <div className={classes.schedulesList} key={Math.random()}>
            <ScheduleItem schedule={el} />

          </div>
        )
      })}
    </>
  )
}

