import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { addFileAC } from '../../redux/actions/actionFiles';
// const useStyles = makeStyles({
//   root: {
//     width: 'max-content',
//     background: 'none',
//   },
// });
const FormFile = ({ schId, clickTrig }) => {
  const dispatch = useDispatch();
  const form = useRef(null);
  // const classes = useStyles();
  const { user } = useSelector(state => state.userReducer);

  const sendFile = e => {
    e.preventDefault()
    // if (e.target.filedata.value.match(/\.(js).*$/gmi))

    const data = new FormData(form.current)
    data.append('userId', user._id);
    data.append('schId', schId);
    console.log('####', form.current);

    fetch('http://localhost:3100/upload/file', {
      // mode: 'no-cors',
      method: 'POST',
      body: data
    })
      .then(res => {
        res.json();
        console.log(res)
      } )
      .then(json => {
        

        dispatch(addFileAC(json));
      })
      .catch((err) => console.log('!!!!', err));
    clickTrig();
  }
  return (
    <form ref={form} onSubmit={sendFile}>
      <input
        accept="/*"
        id="raised-button-file"
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
