import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
// import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import { Link } from 'react-router-dom';
import { logoutUserThunk } from '../../redux/actions/actionUser';

const useStyles = makeStyles({
  root: {
    width: 500,
    background: 'none',
  },
});

const NavigationTopStudent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

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
        to="/adminOffice"
        className="nav-item is-top"
        label="Офис"
        icon={<SchoolOutlinedIcon />} />
      {/* <BottomNavigationAction
        component={Link}
        to="/adminPage"
        className="nav-item is-top" 
        label={firstName}
        icon={<PersonOutlineOutlinedIcon />} /> */}
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
