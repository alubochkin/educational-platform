import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteGroupThunk } from '../../redux/actions/actionGroup';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Modal from '@material-ui/core/Modal';
import GroupDetails from './GroupDetails';

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

  },
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// стили модального окна
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function GroupMap({ group, url }) {
  const dispatch = useDispatch();
  const id = group._id;
  const classes = useStyles();
  const deleteGroupHandler = (id) => {
    dispatch(deleteGroupThunk(id));
  }

  // логика модального окна
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.divGroup}>
       
      <ListItem button component={Link} to={`${url}/updateGroup/${id}`}>
        <ListItemText className={classes.listh3} primary={group.groupTitle} />
      </ListItem>

      <ListItem button onClick={handleOpen}>
        <ZoomInIcon />
      </ListItem>

      <ListItem button
        component={Link}
        to={`${url}/updateGroup/${id}`}>
        < EditIcon />
      </ListItem>

      <ListItem button
        onClick={() => deleteGroupHandler(id)}
      >
        <DeleteIcon />
      </ListItem>
      {/* <div className={classes.small}>{text.description}</div> */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div
          style={modalStyle}
          className={classes.paper}>
          <GroupDetails group={group} />
        </div>

      </Modal>
    </div>
  )
}

export default GroupMap;
