import React from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MIN_LENGTH, VALIDATOR_REQUIRED} from '../../shared/util/validators';
import { DUMMY_PLACES } from './data';


const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const place = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler] = useForm({
    inputs: {
      title: {
        value: place.title,
        isValid: false
      },
      description: {
        value: place.description,
        isValid: false
      }
    },
    valid: true
  })

  if(!place) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    )
  }

  const { title, description } = formState.inputs;

  return <form className="place-form">
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRED()]} errorText="Please enter a valid title" value={title.value} valid={title.valid} onInput={inputHandler}/>
    <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MIN_LENGTH(5)]} errorText="Please enter a valid description (min 5 chars)" onInput={inputHandler} value={description.value} valid={description.valid}/>
    <Button type="submit" disabled={!formState.valid}>UPDATE PLACE</Button>
  </form>
};

export default UpdatePlace;