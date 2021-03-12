/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function LinkMaterialLesson({text, href}) {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link target="_blank" href={href}  variant="body2">
        {text}
      </Link>
    </Typography>
  );
}
