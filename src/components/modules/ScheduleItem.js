import { Link, makeStyles, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormFile from '../formFile/FormFile';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  bottomScheduleItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  fileLoad: {
    display: 'flex',
  },
  file: {
    padding: 2,
    marginRight: 5,
  }
})



export default function ScheduleItem({ schedule, index }) {
  const classes = useStyles();
  const { user } = useSelector(state => state.userReducer)
  // const dispatch = useDispatch();
  const { files } = useSelector(state => state.fileReducer);

  let fileList = [];

  if (files.length > 0) {
    fileList = files.filter((el) => el.schId === schedule._id);
  }

  const [filesInput, setFilesInput] = useState([]);
  const [click, setClick] = useState(0);
  const clickTrig = () => { setClick(prev => prev += 1); console.log(click) };


  useEffect(() => {
    setFilesInput(fileList);
  }, [click]);

  const [isAddingFile, setAddingFile] = useState(false);
  const addFileHandler = () => {
    if (isAddingFile) {
      setAddingFile(false);
    } else {
      setAddingFile(true);
    }
  }
 

  return (
    <>

      <Typography component="h5" variant="body1">{schedule.title}</Typography>

      { user.role === 2 && <Button type="submit"
        onClick={addFileHandler}
        variant="outlined"
        size="small"
        color="primary">
        добавить материалы
      </Button>}

      {isAddingFile &&
        <FormFile schId={schedule._id} clickTrig={clickTrig} />
      }
      <div className={classes.bottomScheduleItem}>
        <div className={classes.fileLoad}>
        {filesInput && filesInput.map((el) => {
          return (
            <div className={classes.file} key={Math.random()}>
              <a href={`/uploads/${el.filename}`} download>
                {el.originalname}
              </a> <br />
            </div>)
        })}
        </div>

      </div>
    </>
  )
}

