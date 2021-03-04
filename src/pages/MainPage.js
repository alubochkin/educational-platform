import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CreateGroupForm from '../components/CreateGroupForm';
import SendInvitesForm from '../components/SendInvitesForm';

const useStyles = makeStyles({
  content: {
    marginTop: '30px',
  }
});


const MainPage = () => {

  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <Container className={classes.content}  maxWidth={false}>
        <h1>Main</h1>
        <CreateGroupForm />
        <SendInvitesForm />
      </Container>
    </React.Fragment>

  )
}

export default MainPage;
