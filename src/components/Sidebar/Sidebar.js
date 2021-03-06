import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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

export default function Sidebar() {
  const classes = useStyles();

  const { user } = useSelector(state => state.userReducer);

  console.log(user)

  const titleCourse = [
    { title: 'Фаза 1', description: 'Javascript' },
    { title: 'Фаза 2', description: 'Backend' },
    { title: 'Фаза 3', description: 'React' }
  ]
  return (
    <div className={classes.root}>
    {user.role === 3 && <>  
        <List className={classes.sidebarUl}>
          {titleCourse.map((text, index) => (
            <ListItem button key={text.title}>
            <ListItemText className={classes.listh3} primary={text.title} />
            <div className={classes.small}>{text.description}</div>
        </ListItem>
          ))}
        </List>
        <Divider />

        <List className={classes.sidebarUl}>
          <ListItem button ><ListItemText primary='Расписание' /><ScheduleIcon /></ListItem>
          <ListItem button ><ListItemText primary='Заметки' /><EventNoteOutlinedIcon /></ListItem>
          <ListItem button ><ListItemText primary='Тесты' /><SubjectOutlinedIcon /></ListItem>
        </List> 
      </>}

      {user.role === 2 && 
        <List className={classes.sidebarUl}>
          <ListItem button ><ListItemText primary='Создать группу' /><ScheduleIcon /></ListItem>
          <ListItem button ><ListItemText primary='Группа' /><EventNoteOutlinedIcon /></ListItem>
          <ListItem button ><ListItemText primary='Учебная программа' /><SubjectOutlinedIcon /></ListItem>
          <ListItem button ><ListItemText primary='Создать тесты' /><SubjectOutlinedIcon /></ListItem>
        </List>}

    </div>


  );
}

// Расписание Заметки Тесты


