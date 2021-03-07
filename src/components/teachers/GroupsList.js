import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsThunk } from '../../redux/actions/actionGroup';
import GroupMap from './GroupMap';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ScheduleIcon from '@material-ui/icons/Schedule';


function GetGroups() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(getGroupsThunk()), []);
  const { groups } = useSelector(state => state.groupReducer);
 
  return (
    <>
    <h1>Мои группы</h1>
    {
    groups && groups.map(group => {
      return (
        <GroupMap group={group} />
      )
    })}
       <ListItem button component={Link} to={"/groupadd"}><ListItemText primary='Создать группу' /><ScheduleIcon /></ListItem>
      </>
  )
}
export default GetGroups;
