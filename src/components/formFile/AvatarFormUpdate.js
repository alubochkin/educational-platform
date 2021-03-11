import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'absolute',
      bottom: -60,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'max-content'
    },
  },
  input: {
    display: 'none',
  },
  inputDescript: {
    fontSize: 12
  }
}));

export default function AvatarFormUpdaate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
          <span className={classes.inputDescript}>Сменить аватар</span>
        </IconButton>
      </label>
    </div>
  );
}
