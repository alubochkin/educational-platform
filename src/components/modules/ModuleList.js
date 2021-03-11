import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ModuleItem from './ModuleItem';

const useStyles = makeStyles({ 
  gridListModule: {

  },
  gridListModuleItem: {
    display: 'grid',
    alignItems: 'self-start',
    background: '#3f51b612',
    margin: '15px 0',
    boxShadow: '0 0 2px #33333369',
  }

})

export default function ModuleList({ spec }) {
  const { modules } = useSelector(state => state.moduleReducer);
  const classes = useStyles();

  let moduleList = [];

  if (modules.length > 0) {
    moduleList = modules.filter((el) => el.titleSpec === spec);
  }

  return (
    <div className={classes.gridListModule}>
      {moduleList && moduleList.map((el) => {
        return (
          <div className={classes.gridListModuleItem} key={Math.random()}>
            <ModuleItem module={el} />
          </div>
        )
      })}
    </div>
  )
}

