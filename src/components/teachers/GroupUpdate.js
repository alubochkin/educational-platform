/* eslint-disable no-shadow-restricted-names */
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, Select, InputLabel } from '@material-ui/core';
import { updateGroupThunk, groupDetailsThunk } from '../../redux/actions/actionGroup';
import SendInvitesForm from '../InvitedStudent/SendInvitesForm';
// стили модального окна
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function GroupUpdate() {
  const dispatch = useDispatch();
  const classes = useStyles();
  // здесь реально написано undefined это так надо
  const { undefined } = useParams();
  const groupId = undefined;
  const { user } = useSelector((state) => state.userReducer);
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
  console.log(groupUpdated)
  // логика модального окна
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
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
        <Button type="submit"
          variant="outlined"
          size="small"
          color="primary">
          Сохранить 
        </Button>
      </form>
     
      {groupStudents && <ul>
        {groupStudents.map((student) => {
          return (<>
            <span>{student.firstName}</span>
            <span>{student.lastName}</span>
            <br />
          </>)
        })}
      </ul>}
      





      <Button type="submit"
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleOpen}>
        Пригласить студентов
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div
          style={modalStyle}
          className={classes.paper}>
          <SendInvitesForm groupId={groupId} handleclose={handleClose} />
        </div>

      </Modal>
    </Container>
  )
}
