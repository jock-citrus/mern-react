import React, { useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import './PlaceItem.css'

const PlaceItem = props => {
  const { place } = props;
  const [showMap, setShowMap] = useState(false)

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>The Map</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={place.imageUrl} alt={place.title} />
          </div>
          <div className="place-item__info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${place.id}`}>EDIT</Button>
            <Button danger >DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default PlaceItem;