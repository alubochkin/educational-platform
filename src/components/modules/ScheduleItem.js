import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FormFile from '../formFile/FormFile';
// import { getFilesThunk } from '../../redux/actions/actionFiles';

export default function ScheduleItem({ schedule }) {
  // const dispatch = useDispatch();
  const { files } = useSelector(state => state.fileReducer);

  let fileList = [];

  if (files.length > 0) {
    fileList = files.filter((el) => el.schId === schedule._id);
  }

  const [filesInput, setFilesInput] = useState([]);
  const [click, setClick] = useState(false);
  const clickTrig = () => { setClick(prev => !prev) };

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
      <div >

        {filesInput && filesInput.map((el) => {
          return (<div key={Math.random()}>
            <a href={`/uploads/${el.filename}`} download>
              {el.originalname}
            </a> <br />
          </div>)
        })}

        <span onClick={addFileHandler}>Добавить материалы</span>

        {isAddingFile &&
          <FormFile schId={schedule._id} clickTrig={clickTrig} />
        }
      </div>
    </div>


  )
}

