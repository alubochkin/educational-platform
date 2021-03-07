import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsThunk } from '../../redux/actions/actionGroup';
import GroupMap from './GroupMap';

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
      </>
  )
}
export default GetGroups;
