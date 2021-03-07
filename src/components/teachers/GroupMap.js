import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
  divGroup: {
    display: 'flex',

  }
}));

function GroupMap({ group }) {
  const classes = useStyles();
  return (
    <div className={classes.divGroup}>
    <ListItem button>
      <ListItemText className={classes.listh3} primary={group.groupTitle} />
    </ListItem>
      <ListItem button
        component={Link}
        to="/">
        < EditIcon />
      </ListItem>
       <ListItem button
        component={Link}
        to="/">
        <DeleteIcon />
      </ListItem>
      {/* <div className={classes.small}>{text.description}</div> */}
      </div>
  )
}

export default GroupMap;
