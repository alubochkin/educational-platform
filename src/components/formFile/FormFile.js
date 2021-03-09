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
    // if (e.target.filedata.value.match(/\.(js).*$/gmi))

    const data = new FormData(form.current)
    data.append('userId', user._id);
    console.log('####', form.current);

    fetch('http://localhost:3100/upload/file', {
      // mode: 'no-cors',
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(json => console.log('@@@', json))
      .catch((err) => console.log('!!!!', err));
  }
  return (
    <form ref={form} onSubmit={sendFile}>
      <input
        accept="/*"
        id="raised-button-file"
        multiple
        type="file"
        name="filedata"
      />
      <Button type="submit">
        Send
      </Button>
    </form>
  )

}

export default FormFile;
