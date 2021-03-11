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

export default function NewNote(props) {
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
    <Dialog open={open.isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">New note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Type title text
          </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label={open.isAdd ? 'Title' : ''}
          fullWidth
          defaultValue={open.note.title}
          onChange={(event) => noteChange(event)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="content"
          name="content"
          label={open.isAdd ? 'Text' : ''}
          fullWidth
          multiline
          rows={5}
          defaultValue={open.note.content}
          onChange={(event) => noteChange(event)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        <Button onClick={(event) => open.isAdd ? addNote(event) : updateNote(event)} color="primary">
          {open.isAdd ? 'AddNote' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
