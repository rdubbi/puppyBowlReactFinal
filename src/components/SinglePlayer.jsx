import React from "react";

export default function SinglePlayer({
  name,
  status,
  breed,
  image,
}) {
  return (
    <>
      <div className="player-card">
        <div className="player-details">
          <img className="player-image" src={image} />
          <p>
            {" "}
            <b>Name:</b> {name}{" "}
          </p>
          <p>
            {" "}
            <b>Breed:</b> {breed}{" "}
          </p>

          <p>
            {" "}
            <b>Status:</b> {status}
          </p>
        </div>
      </div>
    </>
  );
}
