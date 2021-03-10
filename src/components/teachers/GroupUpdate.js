/* eslint-disable no-dupe-keys */
/* eslint-disable no-shadow-restricted-names */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, Select } from '@material-ui/core';
import { updateGroupThunk, groupDetailsThunk } from '../../redux/actions/actionGroup';
import SendInvitesForm from '../InvitedStudent/SendInvitesForm';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '50px 30px',
    width: '100%'
  },
  listStudents: {
    display: 'flex',
    margin: '30px 0',
    flexWrap: 'wrap',
    width: '100%'
  },
  listStudentsItem: {
    marginRight: 15,
  },
  buttonSave: {
    width: 'max-content'
  },
  modal: {
    transition: '.3s',
    '& div[aria-hidden]': {
      background: '#cccccc7a !important',
      backdropFilter: 'blur(10px)',
    }
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '250px',
    boxShadow: '0 0 30px #33333330',
    position: 'absolute',
    outline: 'none',
    width: '70%',
    background: '#fff !important',
    padding: '50px 30px',
    left: '50%',
    top: '30%',
    transform: ' translate(-50%, -50%)',
  },
}));

export default function GroupUpdate() {
  const dispatch = useDispatch();
  const classes = useStyles();
  // здесь реально написано undefined это так надо
  const { undefined } = useParams();
  const groupId = undefined;
  const { user } = useSelector((state) => state.userReducer);
  const { specTeachers } = useSelector((state) => state.specReducer);
  const history = useHistory();
  const { groups } = useSelector(state => state.groupReducer);
  const group = groups.find((el) => el._id === groupId);
  const [groupUpdated, setGroupUpdated] = useState(group);

  const backToGroups = () => {
    if (user.role === 1) {
      history.push('/adminOffice/groups');
    } else if (user.role === 2) {
      history.push('/teacheroffice/groups');
    }
  }
  const handleChange = (event) => {
    setGroupUpdated((group) => {
      return ({
        ...group,
        [event.target.name]: event.target.value,
      })
    })
  }

  // логика модального окна
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(groupDetailsThunk(group._id));
  }, [dispatch, group._id]);
  const { groupStudents } = useSelector(state => state.groupReducer)

  const handleSubmit = (event) => {
    event.preventDefault();
    // добавить дополнительные проверки
    dispatch(updateGroupThunk(groupUpdated, user._id));
    backToGroups();
  }

  return (

    <Container className={classes.container} maxWidth={false}>

     
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        validate="true">
        <TextField
          onChange={handleChange}
          value={groupUpdated.groupTitle}
          name="groupTitle"
          label="Название группы"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <div className={classes.formItems}>
          <TextField
            value={groupUpdated.strDateStart}
            className={classes.textField}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            type="date"
            name="strDateStart"
            label="Дата старта"
          />
          <TextField
            value={String(groupUpdated.strDateFinish)}
            className={classes.textField}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            type="date"
            name="strDateFinish"
            label="Дата окончания"
          />
        </div>



        {user.role === 1 &&
          // добавление куратора
          <div>
            <span>выбрать куратора группы</span>
            <Select
              required
              name="curatorId"
              native
              value={groupUpdated.curatorId}
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              {specTeachers.map((el) => {
                return (
                  <option key={Math.random()} value={el.userId}>{el.firstName} {el.lastName}</option>
                )
              })}
            </Select>
          </div>
        }


        <Button type="submit"
        className={classes.buttonSave}
          variant="outlined"
          size="small"
          color="primary">
          Сохранить
        </Button>
      </form>

      {groupStudents && 
        <div className={classes.listStudents}>
          {groupStudents.map((student) => {
            return ( 
            <Chip
              className={classes.listStudentsItem}
              avatar={<FaceIcon>M</FaceIcon>}
              label={`${student.firstName} ${student.lastName}`}
              clickable
              key={Math.random()}
              color="primary"
            />)
          })}
        </div>}


      <Button type="submit"
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleOpen}>
        Пригласить студентов
        </Button>
      <Modal className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div
          className={classes.paper}>
          <SendInvitesForm groupId={groupId} handleclose={handleClose} />
        </div>

      </Modal>
    </Container>
  )
}
