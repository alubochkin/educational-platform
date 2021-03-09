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

  const data = new FormData()
  const classes = useStyles();
  const { user } = useSelector(state => state.userReducer);


  const sendFile = async (e) => {
    e.preventDefault();

    const reader = new FileReader();

    if (e.target.filedata.value.match(/\.[(js)|(html)].*$/gmi)) {

      const dataSendText = {
        userId: user._id
      }

      const file = e.target.filedata.files[0]

      reader.readAsText(file)


      console.log(dataSendText)


      reader.onload = () => dataSendText.text = reader.result;
      sendData(dataSendText)
  

      function sendData (data) {
        fetch('http://localhost:3100/upload/file', {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(json => console.log('@@@', json))
        .catch((err) => console.log('!!!!', err));    
      }
    }
  }

  return (
    <form  onSubmit={sendFile}>
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