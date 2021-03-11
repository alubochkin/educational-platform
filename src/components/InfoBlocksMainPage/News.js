
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#ffffff00',
    padding: '10px 15px 30px 15px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: '#3f51b6',
    fontWeight: '600'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function News({titleComponent, dataComponent}) {
  console.log('Koca: dataComponent ', dataComponent);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h2" component="h2" color="textSecondary" gutterBottom>
          {titleComponent}
        </Typography>
          {dataComponent?.map((item) => <Typography key={Math.random()} variant="p" component="div"> {item}</Typography>
          )}



      </CardContent>
    </Card>
  );
}