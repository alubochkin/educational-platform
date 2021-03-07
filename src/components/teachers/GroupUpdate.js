import React from 'react'
import { useParams } from 'react-router-dom';

export default function GroupUpdate() {
  const { undefined } = useParams();
  console.log('useParams()', useParams());
  return (
    <div>
      {undefined} vvvvvv
    </div>
  )
}

