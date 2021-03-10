import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormFile from '../formFile/FormFile';
import { getFilesThunk } from '../../redux/actions/actionFiles';

export default function ScheduleItem({ schedule }) {
  const dispatch = useDispatch();
  const { files } = useSelector(state => state.fileReducer);

  let fileList = [];

  if (files.length > 0) {
    fileList = files.filter((el) => el.schId === schedule._id);
  }

  useEffect(() => {
    // танк фетч запрос файла
    dispatch(getFilesThunk(schedule._id));
  }, [dispatch, schedule._id]);

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

        {fileList && fileList.map((el) => {
          return (<div key={Math.random()}>
            <a href={`uploads/${el.filename}`}>
              {el.originalname}
            </a> <br />
          </div>)
        })}

        <span onClick={addFileHandler}>Добавить материалы</span>

        {isAddingFile &&
          <FormFile schId={schedule._id} />
        }
      </div>
    </div>


  )
}

