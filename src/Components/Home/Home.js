import React from "react";

import data from "../Data/data.json";
import Transport from "../Transport/Transport";

import "./Home.css";

const Home = () => {
  const vehicles = data;
  console.log(vehicles);
  return (
    <div className="transport-options">
      {vehicles.map((vehicle) => (
        <Transport onClick={} key={vehicle.id} vehicle={vehicle}></Transport>
      ))}
    </div>
  );
};

export default Home;
