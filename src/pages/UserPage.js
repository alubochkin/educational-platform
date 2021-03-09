/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    marginTop: 50,
    display: 'flex'
  },
  l_Block: {
    width: '15%',
  },
  r_Block: {
    width: '85%',
    padding: '30px 50px',
  },
  r_Block_item: {
    
  },

  userAvatar: {
    width: 'max-content',
    padding: '20px',
    border: '15px solid #f0f0f0',
    borderRadius: '50%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  avatarImg: {
    maxWidth: 200
  }
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const { user } = useSelector(state => state.userReducer);

  console.log(user)

  return (

      <Container className={classes.rootContainer} maxWidth={false}>

      <div className={classes.l_Block} >
        <div className={classes.userAvatar}>
          <img className={classes.avatarImg}
            src={`data:image/png;base64,${user.avatar}`} />
        </div>
      </div>

      <div className={classes.r_Block}>
        <div className={classes.r_Block_item}> 
          <span>{user.firstName} </span> <span>{user.lastName}</span>
          </div>
        <div className={classes.r_Block_item}> {user.email}</div>
      </div>
        
      </Container>

  );
}
