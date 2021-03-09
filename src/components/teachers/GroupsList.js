import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsThunk } from '../../redux/actions/actionGroup';
import GroupMap from './GroupMap';
import { Button } from '@material-ui/core';
import CreateGroupForm from '../InvitedStudent/CreateGroupForm';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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
    transform:' translate(-50%, -50%)',
  },
  title: {
    marginBottom: 30
  },
  modal: {
    transition: '.3s',
    '& div[aria-hidden]': {
      background: '#cccccc7a !important',
      backdropFilter: 'blur(10px)',
    }   
  },
}));

function GetGroups({ url }) {
  const { user } = useSelector(state => state.userReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.role === 1) {
      dispatch(getGroupsThunk(user._id, 'admin'));
    } else if (user.role === 2) {
      dispatch(getGroupsThunk(user._id, 'teacher'));
    }
  }, [user._id, user.role, dispatch]);
  const { groups } = useSelector(state => state.groupReducer);

  // логика модального окна
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className={classes.title}>Мои группы</h1>
      {
        groups && groups.map((group, i) => {
          return (
            <GroupMap group={group} key={`group-${i}`} url={url} />
          )
        })}

      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpen}> Создать группу </Button>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div
          className={classes.paper}>
          <CreateGroupForm handleclose={handleClose} />
        </div>

      </Modal>

    </>
  )
}
export default GetGroups;
