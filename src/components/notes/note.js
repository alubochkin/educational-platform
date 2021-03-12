import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { removeNotesThunk } from '../../redux/actions/actionsNotes';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';


const useStyles = makeStyles({
  root: {
     width: '100%',
    margin: 10,
    display: 'grid',
    gridTemplateColumns: '89% 1fr',
    textDecoration: 'none',
  },
  hover: {
    "&:hover": {
      overflow: "inherit",
      textOverflow: "inherit",
      whiteSpace: "inherit",
      height: "auto"
    }
  },
  card: {
    overflow: "hidden"
  },
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
      <CardContent className={classes.card}>
        <Typography variant="h5" component="h4">
          {title}
        </Typography>
        <Typography hover="true" className={classes.hover} noWrap={true}  variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={editNote} size="small">
          <BorderColorOutlinedIcon />
        </Button>
        <Button onClick={delNote} size="small">
          <RemoveCircleOutlineOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
