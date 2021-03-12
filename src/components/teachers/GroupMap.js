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
      paddingLeft: '0'
    }
  },
  buttonSelectGroup: {
    paddingLeft: 0
  },
  small: {
    fontSize: 12,
    background: '#ffeb3b',
    borderRadius: 30,
    padding: '2px 10px',
  },
  divGroup: {
    display: 'grid',
    gridTemplateColumns: 'calc(100% - 150px) 50px 50px 50px',
    alignItems: 'center',
    borderBottom: '2px solid #cdcdcd',
  },
  modal: {
    transition: '.3s',
    '& div[aria-hidden]': {
      background: '#cccccc7a !important',
      backdropFilter: 'blur(10px)',
    }
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    minHeight: '250px',
    boxShadow: '0 0 30px #33333330',
    position: 'absolute',
    outline: 'none',
    width: 600,
    background: '#fff !important',
    padding: theme.spacing(2, 4, 3),
    left: '50%',
    top: '30%',
    transform: ' translate(-50%, -50%)',
  },

}));

function GroupMap({ group, url }) {
  const dispatch = useDispatch();
  const id = group._id;
  const classes = useStyles();

  const deleteGroupHandler = (id) => {
    dispatch(deleteGroupThunk(id));
  }

  const [open, setOpen] = React.useState(false);
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
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div
          className={classes.paper}>
          <GroupDetails group={group} />
        </div>

      </Modal>
    </div>
  )
}

export default GroupMap;
