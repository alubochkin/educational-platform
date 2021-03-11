import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'
import { removeNotesThunk } from '../../redux/actions/actionsNotes'
const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 10
  }
});

export default function Note({ _id, title, content, editClickOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const delNote = async (event) => {
    event.preventDefault();
    dispatch(removeNotesThunk(_id));
  };

  const editNote = () => {
    editClickOpen({ _id: _id, title: title, content: content });
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={editNote} size="small">Edit</Button>
        <Button onClick={delNote} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
