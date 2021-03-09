import React from 'react';
import { useSelector } from 'react-redux';
import ModuleItem from './ModuleItem';

export default function ModuleList({ spec }) {
  const { modules } = useSelector(state => state.moduleReducer);

  let moduleList = [];

  if (modules) {
    moduleList = modules.filter((el) => el.titleSpec === spec);
  }

  return (
    <div>
      {moduleList && moduleList.map((el) => {
        return (
          <div key={Math.random()}>
            <ModuleItem module={el} />
          </div>
        )
      })}
    </div>
  )
}

