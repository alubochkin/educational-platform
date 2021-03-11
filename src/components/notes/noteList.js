/* eslint-disable valid-typeof */
import React, { useEffect } from 'react';
import Note from './note';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getNotesThunk } from '../../redux/actions/actionsNotes'



export const NoteList = ({ editClickOpen }) => {
  const dispatch = useDispatch();
  const { notes } = useSelector(state => state.notesReducer);
  const { user } = useSelector(state => state.userReducer);

  console.log('notes', notes)

  useEffect(() => {
    dispatch(getNotesThunk(user._id));
  }, [dispatch]);

  return (
    <div>
      { typeof notes === 'array' && notes.map((el) => <Note key={el.id} {...el} editClickOpen={editClickOpen} />)}
    </div>
  )
};
