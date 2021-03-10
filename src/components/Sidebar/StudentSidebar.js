import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
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
    borderRight: '1px solid #3f51b6',
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

export default function SidebarLeft() {
  const { url } = useRouteMatch();
  const classes = useStyles();
  const { moduleStudent } = useSelector(state => state.userReducer);


  // блоки обучения если нет в localstorage забрать с базы > в reducer
  // 
  // передавать 

  console.log(moduleStudent)


  return (
    <div className={classes.root}>
      <>
        <List className={classes.sidebarUl}>
          {moduleStudent?.map((text, index) => (
            <ListItem 
              component={Link} to={`${url}/shedule/${text.id}`}
              button key={text.title}>
                <ListItemText className={classes.listh3} primary={`Фаза ${index + 1}`} />
                <div className={classes.small}>{text.title}</div>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List className={classes.sidebarUl}>
        <ListItem 
          button component={Link} to={`${url}/calendarShedule`}>
            <ListItemText primary='Расписание' /><ScheduleIcon />
        </ListItem>
          <ListItem button ><ListItemText primary='Заметки' /><EventNoteOutlinedIcon /></ListItem>
          <ListItem button ><ListItemText primary='Тесты' /><SubjectOutlinedIcon /></ListItem>
        </List>
      </>



    </div>
  );
}

// spec = {
//    phase: [
      
//     { title: 'Фаза 1', description: 'Javascript', 
//       shedul: или _id или весь obj
//     },
//     { title: 'Фаза 2', description: 'Backend' },
//     { title: 'Фаза 3', description: 'React' }
//   ]
// }


// Расписание Заметки Тесты


