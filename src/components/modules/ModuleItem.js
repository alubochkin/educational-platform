import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { updateModuleThunk } from '../../redux/actions/actionModules';
import Modal from '@material-ui/core/Modal';
import SceduleCreate from './SceduleCreate';
import ScheduleList from './SchedulesList'


const useStyles = makeStyles((theme) => ({
  update: {
    border: '1px solid',
    marginLeft: '200px',
  },
   paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModuleItem({ module }) {
  const classes = useStyles();
  const [isUpdating, setUpdating] = useState(false);
  const [moduleUpd, setModuleUpd] = useState(module);
  const dispatch = useDispatch();

  const updateHandler = () => {
    if (isUpdating) {
      setUpdating(false);
    } else {
      setUpdating(true);
    }
  }

  const handleChange = (event) => {
    setModuleUpd((moduleUpd) => {
      return ({
        ...moduleUpd,
        [event.target.name]: event.target.value,
      })
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // добавить дополнительные проверки
    dispatch(updateModuleThunk(moduleUpd));
    setUpdating(false);
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    
    <div>
      <ScheduleList id={module._id}/>
      {module.title}
    
      {!isUpdating &&
        <>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={updateHandler}>
          < EditIcon />
        </Button>
        <Button type="submit"
          variant="outlined"
          size="large"
          color="primary"
          
          onClick={handleOpen}>
            Добавить уроки
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          >
          <div
            className={classes.paper}>
            <SceduleCreate id={module._id} title={ module.title } handleclose={handleClose} />
          </div>

        </Modal>
        </>
      }

      {isUpdating &&
        <div className={classes.update}>
          Редактировать модуль: {module.title}

          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              value={moduleUpd.title}
              name="title"
              label="Название модуля"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button
              size="small"
              variant="outlined"
              color="primary"
              type="submit">
              OK
            </Button>
          </form>

          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={updateHandler}>
            X
          </Button>

        </div>
      }
    </div>
  )
}

