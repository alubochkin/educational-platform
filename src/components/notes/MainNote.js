import React from 'react';
import { NoteList } from './noteList'
import NewNote from './newNote'
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  addButton: {
    '&:hover': {
      transform: 'scale(1.1)',
      background: '#3f51b6',
    },
    right: 50,
    bottom: 100,
    position: 'absolute',
    padding: 15,
    background: '#3f51b6',
    color: '#fff',
    borderRadius: 30,
    width: 'max-content',
    height: 'max-content',
    transition: '.3s',
  },
  addIcon: {

  }
}));

export const MainNote = () => {

  const classes = useStyles();
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
    <>
      <NoteList editClickOpen={editClickOpen} />
      <NewNote open={open} handleClose={handleClose} />

      <Tooltip title="Добавить заметку" placement="right">
        <Button color="primary" className={classes.addButton} onClick={handleClickOpen}>
          <LibraryAddIcon className={classes.addIcon}/>
        </Button>
      </Tooltip>
    </>
  );
};
