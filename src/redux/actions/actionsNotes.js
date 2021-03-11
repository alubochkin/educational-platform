import { UPDATE_NOTES, ADD_NOTES, GET_NOTES, DELETE_NOTES } from '../actionTypes';
import { fetchMethod, fetchGet } from '../thunkUtils';

export const addNoteAC = (note) => ({ type: ADD_NOTES, payload: { note } });
export const getNoteAC = (notes) => ({ type: GET_NOTES, payload: { notes } });
export const updateNoteAC = (note) => ({ type: UPDATE_NOTES, payload: { note } });
export const removeAC = (note) => ({ type: DELETE_NOTES, payload: { note } });

export const addNotesThunk = (userId, note) => async (dispatch) => {
  console.log('Koca: note ', note);
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/notes/add',
      method: 'post',
      body: { note, userId }
    });
    const result = await response.json();
    console.log('result', result);
    if (response.ok) {
      dispatch(addNoteAC({ ...note, result }));
    } else {
      console.log('err');
    }
  } catch ({ message }) {
    console.log('Err: ', message);
  }
}

export const updateNotesThunk = (note) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/notes/update',
      method: 'post',
      body: { id: note._id, title: note.title, content: note.content }
    });
    if (!response.error) {
      const note = response;
      dispatch(updateNoteAC(note));
    }
  } catch (err) {
    console.log('Err', err);
  }
}

export const getNotesThunk = (userId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: `http://localhost:3100/notes`,
      method: 'post',
      body: { userId }
    });

    if (!response.error) {
      const notesList = response;
      dispatch(getNoteAC(notesList));
    }
  } catch (err) {
    console.log('Err', err);
  }
}
export const removeNotesThunk = (notesId) => async (dispatch) => {
  try {
    const response = await fetchGet({ path: `http://localhost:3100/notes/${notesId}` });
    if (!response.error) {
      dispatch(removeAC(notesId));
    }
  } catch (err) {
    console.log('Err', err);
  }
}
