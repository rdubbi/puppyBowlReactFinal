import React from "react";

import { useFetchPlayersQuery } from "../api/puppyBowlApi";

import "../index.css";
import { Link } from "react-router-dom";

// Define a new React component
const AllPlayers = ({ setName, setStatus, setBreed, setImage, searchText }) => {
  const { data = {}, error, isLoading } = useFetchPlayersQuery();
  const filteredPlayers =
    data?.data?.players?.filter((player) =>
      player.name?.toLowerCase().includes(searchText.toLowerCase())
    ) || [];
  if (isLoading) {
    return <div>Please Wait While the Data Loads...</div>;
  }

  if (error) {
    return <div>We are Sorry, the data failed to load to an Error.</div>;
  }

  return (
    <div className="players">
      {filteredPlayers.map((player) => (
        <div key={player.id} className="player-card">
          <img
            className="player-image"
            src={player.imageUrl}
            alt={player.name}
          />
          <div className="player-details">
            <h2> {player.name} </h2>

            <Link to="/SinglePlayer">
              <button
                onClick={() => {
                  setName(player.name);
                  setBreed(player.breed);
                  setStatus(player.status);
                  setImage(player.imageUrl);
                }}
              >
                See More Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPlayers;
