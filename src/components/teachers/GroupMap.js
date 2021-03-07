import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import ScheduleIcon from '@material-ui/icons/Schedule';
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

function GroupMap({ group }) {
  const classes = useStyles();
  return (
    <ListItem button>
      <ListItemText className={classes.listh3} primary={group.groupTitle} />
      {/* <div className={classes.small}>{text.description}</div> */}
    </ListItem>
  )
}

export default GroupMap;
