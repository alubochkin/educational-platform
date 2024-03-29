
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" className={classes.title} component="h2" color="textSecondary" gutterBottom>
          {titleComponent}
        </Typography>
          {dataComponent?.map((item) => <Typography variant="body1" key={Math.random()} component="div"> {item}</Typography>
          )}



      </CardContent>
    </Card>
  );
}
