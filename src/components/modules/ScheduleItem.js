import React, { useState } from 'react';
import FormFile from '../formFile/FormFile';

export default function ScheduleItem({ schedule }) {
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
        <span onClick={addFileHandler}>Добавить материалы</span>

        {isAddingFile &&
          <FormFile />
        }
      </div>
    </div>


  )
}

