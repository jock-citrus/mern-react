import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {VALIDATOR_MIN_LENGTH, VALIDATOR_REQUIRED} from '../../shared/util/validators';
import { DUMMY_PLACES } from './data';


const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true)
  const placeId = useParams().placeId;
  
  const [formState, inputHandler, setFormData] = useForm({
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    valid: true
  })

  const place = DUMMY_PLACES.find(p => p.id === placeId);
  
  useEffect(() => {
    if(place) {
      setFormData({
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
    }
    setIsLoading(false)
  }, [setFormData, place])

  if(!place) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    )
  }

  const { title, description } = formState.inputs;

  if(isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    )
  }

  return <form className="place-form">
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRED()]} errorText="Please enter a valid title" value={title.value} valid={title.valid} onInput={inputHandler}/>
    <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MIN_LENGTH(5)]} errorText="Please enter a valid description (min 5 chars)" onInput={inputHandler} value={description.value} valid={description.valid}/>
    <Button type="submit" disabled={!formState.valid}>UPDATE PLACE</Button>
  </form>
};

export default UpdatePlace;