/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable valid-typeof */
import React, { useEffect } from 'react';
import Note from './note';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getNotesThunk } from '../../redux/actions/actionsNotes'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  notelistItem: {

  }
}));


export const NoteList = ({ editClickOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { notes } = useSelector(state => state.notesReducer);
  const { user } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getNotesThunk(user._id));
  }, [dispatch]);

  return (
    <a href="#" className={classes.notelistWrapper}>
      {notes.map((el) => <Note key={el._id} {...el} editClickOpen={editClickOpen} />)}
    </a>
  )
};
