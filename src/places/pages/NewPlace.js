import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRED } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRED()]} errorText="Please enter a valid title"/>
    </form>
  );
};

export default NewPlace;