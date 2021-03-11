import React from 'react';
import { NoteList } from '../notes/noteList'
import NewNote from '../notes/newNote'
import Button from '@material-ui/core/Button';

export const Main = () => {
  const [open, setOpen] = React.useState({
    isOpen: false,
    isAdd: true,
    note: {
      id: '',
      title: '',
      text: ''
    },
  });

  const handleClickOpen = () => {
    setOpen({
      isOpen: true,
      isAdd: true,
      note: {
        id: '',
        title: '',
        text: ''
      }
    });
  };

  const handleClose = () => {
    setOpen({
      isOpen: false,
      isAdd: true,
      note: {
        id: '',
        title: '',
        text: ''
      }
    });
  };

  const editClickOpen = (note) => {
    setOpen({
      isOpen: true,
      isAdd: false,
      note: { ...note },
    });
  };

  return (
    <div>
      <NoteList editClickOpen={editClickOpen} />
      <Button onClick={handleClickOpen}>
        Add Note
      </Button>
      <NewNote open={open} handleClose={handleClose} />
    </div>
  );
};
