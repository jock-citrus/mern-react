import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MIN_LENGTH, VALIDATOR_REQUIRED} from '../../shared/util/validators';
import { DUMMY_PLACES } from './data';


const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const place = DUMMY_PLACES.find(p => p.id === placeId);

  if(!place) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    )
  }

  return <form>
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRED()]} errorText="Please enter a valid title" onInput={() => {}} value={place.title} valid={true}/>
    <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MIN_LENGTH(5)]} errorText="Please enter a valid description (min 5 chars)" onInput={() => {}} value={place.description} valid={true}/>
    <Button type="submit" disabled={true}>UPDATE PLACE</Button>
  </form>
};

export default UpdatePlace;