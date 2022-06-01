import React from 'react';

import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';
import './PlaceList.css'

const PlaceList = props => {
  if (!props.places.length) {
    return <div className="place-list center">
      <Card>
        <h2>No places found. Maybe create one?</h2>
        <button>Share Place</button>
      </Card>
    </div>
  }

  return <ul className="place-list">
    {props.places.map(place => <PlaceItem key={place.id} place={place}/>)}
  </ul>
}

export default PlaceList;