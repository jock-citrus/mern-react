import React, { useReducer } from 'react';

import './Input.css';

const inputReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, inputDispatch] = useReducer(inputReducer, { value: '', isValid: false });

  const changeHandler = event => {
    inputDispatch({ type: 'CHANGE', value: event.target.value })
  }

  const element =
    props.element === 'input' ? (
      <input id={props.id} type={props.type} value={inputState.value} placeholder={props.placeholder} onChange={changeHandler}/>
    ) : (
      <textarea id={props.id} value={inputState.value} rows={props.rows || 3} onChange={changeHandler}/>
    );


  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;