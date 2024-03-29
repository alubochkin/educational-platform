import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import { Link } from 'react-router-dom';
import { logoutUserThunk } from '../../redux/actions/actionUser';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    background: 'none',
  },
});

const NavigationTopStudent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);


  const { firstName } = user;

  const logoutHandler = () => {
    dispatch(logoutUserThunk());
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        className="nav-item is-top"
        label="Главная"
        icon={<LocalLibraryOutlinedIcon />} />
      {/* <BottomNavigationAction
        component={Link}
        to="/notifications"
        className="nav-item is-top"
        label="Оповещения"
        icon={<NotificationsNoneOutlinedIcon />} /> */}
      <BottomNavigationAction
        component={Link}
        to="/studentoffice/calendarShedule"
        className="nav-item is-top"
        label="Кампус"
        icon={<SchoolOutlinedIcon />} />
      <BottomNavigationAction
        component={Link}
        to="/userPage"
        className="nav-item is-top"
        label={firstName}
        icon={<PersonOutlineOutlinedIcon />} />
      <BottomNavigationAction
        to="/logout"
        className="nav-item is-top"
        label="Выйти"
        onClick={logoutHandler}
        icon={<MeetingRoomOutlinedIcon />} />
    </BottomNavigation>

  );
}

export default NavigationTopStudent;
