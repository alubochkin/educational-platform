import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { addNotesThunk, updateNotesThunk } from '../../redux/actions/actionsNotes';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'relative',
    transition: '.3s',
    width: '100%',
    '& div[aria-hidden]': {
      background: '#cccccc7a !important',
      backdropFilter: 'blur(10px)',
    }
  },
  close: {
    padding: 0,
    position: 'absolute',
    width: 30,
    minWidth: 30,
    height: 30,
    display: 'flex',
    right: 0,
  },
  add: {
    width: 100
  }
}));

export default function NewNote(props) {
  const classes = useStyles();
  const { open, handleClose } = props
  const { user } = useSelector(state => state.userReducer);
  const [note, setNote] = useState({
    title: open.note?.title,
    content: open.note?.content,
  });

  const noteChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  };

  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    dispatch(addNotesThunk(user._id, note));
    handleClose();
  };

  const updateNote = async (event) => {
    event.preventDefault();
    dispatch(updateNotesThunk({ ...note, _id: open.note._id }));
    handleClose();
  };

  return (
    <Dialog className={classes.modal}  open={open.isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Новая заметка
      </DialogTitle>
      <Button className={classes.close} 
        onClick={handleClose} color="primary">
          <CloseOutlinedIcon />
      </Button>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label={open.isAdd ? 'Название' : ''}
          fullWidth
          defaultValue={open.note.title}
          onChange={(event) => noteChange(event)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="content"
          name="content"
          label={open.isAdd ? 'Заметка' : ''}
          fullWidth
          multiline
          rows={5}
          defaultValue={open.note.content}
          onChange={(event) => noteChange(event)}
        />
      </DialogContent>
      <DialogActions>
        
        <Button className={classes.add} 
          onClick={(event) => open.isAdd ? addNote(event) : updateNote(event)} color="primary">
          {open.isAdd ? 'Записать' : 'Записать'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
