import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import './Auth.css';
import { VALIDATOR_EMAIL, VALIDATOR_MIN_LENGTH, VALIDATOR_REQUIRED } from "../../shared/util/validators";

const Auth = () => {
  const [formState, inputHandler] = useForm({
    inputs: {
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

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs)
  }
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input element="input" type="email" id="email" label="E-mail" validators={[VALIDATOR_REQUIRED(), VALIDATOR_EMAIL()]} errorText="Invalid e-mail" onInput={inputHandler}/>
        <Input element="input" type="password" id="password" label="Password" validators={[VALIDATOR_REQUIRED(), VALIDATOR_MIN_LENGTH(5),]} errorText="Invalid password" onInput={inputHandler}/>
        <Button type="submit" disabled={!formState.isValid}>LOG IN</Button>
      </form>
    </Card>
  )
}

export default Auth;