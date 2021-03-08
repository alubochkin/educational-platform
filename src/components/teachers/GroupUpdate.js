/* eslint-disable no-shadow-restricted-names */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import SendInvitesForm from '../InvitedStudent/SendInvitesForm';

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
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function GroupUpdate() {
  const classes = useStyles();
  // здесь реально написано undefined это так надо
  const { undefined } = useParams();
  const groupId = undefined;

  const { groups } = useSelector(state => state.groupReducer);
  const group = groups.find((el) => el._id === groupId);

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
    <div>
      <span>Название группы: {group.groupTitle}</span><br />
      <span>ID: {group._id}</span><br />
      <span>Дата начала: {group.strDateStart}</span><br />
      <span>Дата окончание: {group.strDateFinish}</span><br />

      <Button type="submit"
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleOpen}>
        Пригласить студентов
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div
          style={modalStyle}
          className={classes.paper}>
          <SendInvitesForm groupId={groupId} handleclose={handleClose} />
        </div>

      </Modal>
    </div>
  )
}
