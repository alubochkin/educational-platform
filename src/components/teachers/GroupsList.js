import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsThunk } from '../../redux/actions/actionGroup';
import GroupMap from './GroupMap';
import { Button } from '@material-ui/core';
import CreateGroupForm from '../InvitedStudent/CreateGroupForm';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

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
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function GetGroups({ url }) {
  const { user } = useSelector(state => state.userReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getGroupsThunk(user._id)), [user._id, dispatch]);
  const { groups } = useSelector(state => state.groupReducer);

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
    <>
      <h1>Мои группы</h1>
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
        open={open}
        onClose={handleClose}
      >
        <div
          style={modalStyle}
          className={classes.paper}>
          <CreateGroupForm handleclose={handleClose} />
        </div>

      </Modal>

    </>
  )
}
export default GetGroups;
