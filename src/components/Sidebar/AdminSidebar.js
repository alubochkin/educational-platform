import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: '1px solid',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  sidebarUl: {
    minWidth: '250px',
    marginBottom: '50px'

  },
  listh3: {
    '& *': {
      fontSize: '15px',
      textTransform: 'uppercase',
      color: '#7682c5',
      borderLeft: '2px solid',
      paddingLeft: '11px'
    }

  },
  small: {
    fontSize: 12,
    background: '#ffeb3b',
    borderRadius: 30,
    padding: '2px 10px',
  },
  hrSidebar: {

  }
}));

export default function TeacherSidebar() {
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <List className={classes.sidebarUl}>
        <ListItem button component={Link} to={`${url}/syllabus`}><ListItemText primary='Учебная программа'/><SubjectOutlinedIcon /></ListItem>
        <ListItem button component={Link} to={`${url}/groups`}><ListItemText primary='Группы' /><EventNoteOutlinedIcon /></ListItem>
        {/* <ListItem button component={Link} to={`${url}/groupadd`}><ListItemText primary='Создать группу' /><ScheduleIcon /></ListItem> */}
        {/* <ListItem button ><ListItemText primary='Создать тесты' /><SubjectOutlinedIcon /></ListItem> */}
      </List>

    </div>
  );
}

// Расписание Заметки Тесты


