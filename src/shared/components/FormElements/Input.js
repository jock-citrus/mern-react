import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators)
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true
      }
    default:
      return state;
  }
};

const Input = props => {
  const [{ value, isValid, isTouched }, inputDispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouched:false });
  const { id, onInput } = props;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [onInput, id, value, isValid])

  const changeHandler = event => {
    inputDispatch({ type: 'CHANGE', value: event.target.value, validators: props.validators })
  }

  const touchHandler = () => {
    inputDispatch({ type: 'TOUCH' })
  }

  const element =
    props.element === 'input' ? (
      <input id={props.id} type={props.type} value={value} placeholder={props.placeholder} onChange={changeHandler} onBlur={touchHandler}/>
    ) : (
      <textarea id={props.id} value={value} rows={props.rows || 3} onChange={changeHandler} onBlur={touchHandler}/>
    );

  const showError = !isValid && isTouched;
  return (
    <div className={`form-control ${showError && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {showError && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;