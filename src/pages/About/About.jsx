import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function About() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  function inc() {
    dispatch({ type: 'INC_COUNT' });
  }

  function dec() {
    dispatch({ type: 'DEC_COUNT' });
  }

  return (
    <div>
      <p>About</p>
      <p>TEST REDUX</p>
      <p>{count}</p>
      <button type="button" onClick={inc}>
        +1
      </button>
      <button type="button" onClick={dec}>
        -1
      </button>
    </div>
  );
}
