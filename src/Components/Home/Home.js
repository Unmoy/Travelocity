import React, { useEffect, useState } from "react";
import data from "../Data/data.json";
import Transport from "../Transport/Transport";

import "./Home.css";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    setVehicles(data);
  }, []);
  return (
    <div className="bg-img">
      <div className="transport-options">
        {vehicles.map((vehicle) => (
          <Transport key={vehicle.id} vehicle={vehicle}></Transport>
        ))}
      </div>
    </div>
  );
};

export default Home;
