import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    background: 'none',
  },
});

const FormFile = () => {
  const form = useRef(null);
  const classes = useStyles();
  const { user } = useSelector(state => state.userReducer);

  const sendFile = e => {
    e.preventDefault()

    const data = new FormData(form.current)
    data.append('userId', user._id);
    fetch('/upload/file', {
      mode: 'no-cors',
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(json => setFile(json.file))
  }
  return (
    <form ref={form} onSubmit={sendFile}>
      <input
        accept="/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" >
          Upload
    </Button>
      </label>
    </form>
  )
}

export default FormFile;
