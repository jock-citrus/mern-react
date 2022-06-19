import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MIN_LENGTH, VALIDATOR_REQUIRED } from "../../shared/util/validators";
import { AuthContext } from "../../shared/context/auth-context";
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    inputs: {
      name: undefined,
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  })

  const switchModeHandler = () => {
    // Moving to LOG IN
    if(!isLoginMode) {
      setFormData({
        inputs: {
          ...formState.inputs,
          name: undefined,
        },
        isValid: formState.inputs.email.isValid && formState.inputs.password.isValid
      })
    } else {
      // Moving to SIGN UP
      setFormData({
        inputs: {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
        },
        isValid: false
      })
    }
    setIsLoginMode(prevMode => !prevMode)
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    auth.login()
  }
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input element="input" type="text" id="name" label="Name" validators={[VALIDATOR_REQUIRED()]} errorText="Name is required" onInput={inputHandler}/>}
        <Input element="input" type="email" id="email" label="E-mail" validators={[VALIDATOR_REQUIRED(), VALIDATOR_EMAIL()]} errorText="Invalid e-mail" onInput={inputHandler}/>
        <Input element="input" type="password" id="password" label="Password" validators={[VALIDATOR_REQUIRED(), VALIDATOR_MIN_LENGTH(5),]} errorText="Invalid password" onInput={inputHandler}/>
        <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? 'LOG IN' : 'SIGN UP'}</Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOG IN'}</Button>
    </Card>
  )
}

export default Auth;