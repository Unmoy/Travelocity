import React, { useState } from "react";
import { useParams } from "react-router";
import "./Destination.css";
import data from "../Data/data.json";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useForm } from "react-hook-form";

import { Card, ListGroup } from "react-bootstrap";

const Destination = () => {
  const { key } = useParams();
  const vehicle = data.find((data) => data.name === key);
  console.log(vehicle);
  const { id, url, name } = vehicle;
  console.log(id, url, name);
  const [searchedArea, setSearchedArea] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setSearchedArea(data);
  };

  const containerStyle = {
    width: "800px",
    height: "600px",
  };
  const center = {
    lat: 23.777176,
    lng: 90.399452,
  };
  return (
    <div className="search-place">
      <div className="search-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Pickup Location</h5>
          <input name="pickUp" ref={register({ required: true })} />
          {errors.pickUp && (
            <span className="error">This pickup location is required</span>
          )}
          <h5>Drop Location</h5>
          <input name="drop" ref={register({ required: true })} />
          {errors.drop && (
            <span className="error">This drop location is required</span>
          )}
          <input type="date" id="myDate" defaultValue=""></input>
          <input type="submit" value="Search" />
        </form>
        {searchedArea && (
          <div className="rideLocation">
            <h1 className="places">{searchedArea.pickUp.toUpperCase()}</h1>
            <h1 className="places">{searchedArea.drop.toUpperCase()}</h1>
            <Card style={{ width: "18rem" }}>
              <ListGroup className="type-list" variant="flush">
                <ListGroup.Item>
                  <img src={url} alt="" /> Ticket1 Price:$ 12
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={url} alt="" /> Ticket2 Price:$12
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={url} alt="" /> Ticket3 Price:$12
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        )}
      </div>
      <div className="map-size">
        <LoadScript googleMapsApiKey="AIzaSyDImXtRqirVKzJamVIvTxiLJEKInuXpds4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Destination;
