/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AvatarFormUpdaate from '../components/formFile/AvatarFormUpdate';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    marginTop: 50,
    display: 'flex'
  },
  l_Block: {
    width: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  r_Block: {
    width: '85%',
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'column',
  },
  personalData: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: '15px 0'
  },
  r_Block_item: {
    padding: '15px 0',
    fontSize: 16,
    borderBottom: '1px solid #ccc'
  },
  update: {
    width: 'max-content',
    alignSelf: 'flex-end',
  },
  faculty: {
    marginBottom: 10,
    width: 'max-content',
    fontSize: 24,
    borderBottom: '1px solid #3f51b5',
    color: '#3f51b5'
  },

  groupTitle: {
    fontSize: 20,
    marginBottom: 30,
  },

  userAvatar: {
    width: 'max-content',
    padding: '20px',
    border: '15px solid #f0f0f0',
    borderRadius: '50%',
    boxSizing: 'border-box',
    marginBottom: 30,
    position: 'relative'
  },
  avatarImg: {
    maxWidth: 120
  },
  updateAvatar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  }
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const { user } = useSelector(state => state.userReducer);

  return (

      <Container className={classes.rootContainer} maxWidth={false}>

      <div className={classes.l_Block} >
        <div className={classes.userAvatar}>
          <img className={classes.avatarImg}
            src={user.avatar && (typeof user.avatar === 'string' )            
              ? `data:image/png;base64,${user.avatar}`
              : "https://yt3.ggpht.com/a/AATXAJyxpFPD238s9pNQ6Yp1IZOdkk0NH1uQRVRSYQ=s900-c-k-c0xffffffff-no-rj-mo"
              
              } />

              <AvatarFormUpdaate className={classes.updateAvatar}/>
        </div>


      </div>

      <div className={classes.r_Block}>
      {user.role === 3 && 
        <> 
          <div className={classes.faculty}> 
            Вы студент буткемпа на факультете: {user.groupSpec}
          </div> 
          <div className={classes.groupTitle}> 
            Ваша группа называется: {user.groupTitle}
          </div> 
        </>
        }
        <div className={classes.personalData}>Персональные данные</div>
        <div className={classes.r_Block_item}> 
          <span>{user.firstName} </span> 
          <span>{user.lastName}</span>
        </div>

        <div className={classes.r_Block_item}> {user.email}</div>

        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.update}>
          Изменить данные
        </Button>
        
      </div>
        
      </Container>

  );
}
