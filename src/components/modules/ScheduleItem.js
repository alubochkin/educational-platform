import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormFile from '../formFile/FormFile';
import { Button } from '@material-ui/core';


// import { getFilesThunk } from '../../redux/actions/actionFiles';

export default function ScheduleItem({ schedule }) {
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
    <div>
      {schedule.title}
      { user.role === 2 && <Button type="submit"
        onClick={addFileHandler}
        variant="outlined"
        size="small"
        color="primary">
        Добавить материалы
        </Button>}
      <div >
        {isAddingFile &&
          <FormFile schId={schedule._id} clickTrig={clickTrig} />
        }

        {filesInput && filesInput.map((el) => {
          return (<div key={Math.random()}>
            <a href={`/uploads/${el.filename}`} download>
              {el.originalname}
            </a> <br />
          </div>)
        })}
      
      </div>
    </div>


  )
}

