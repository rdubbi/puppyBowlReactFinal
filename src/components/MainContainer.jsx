import { Routes, Route } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import NewPlayerForm from "./NewPlayerForm";
import { useState } from "react";

export default function MainContainer({ searchText }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AllPlayers
              name={name}
              setName={setName}
              status={status}
              setStatus={setStatus}
              breed={breed}
              setBreed={setBreed}
              image={image}
              setImage={setImage}
              searchText={searchText}
            />
          }
        />
        <Route
          path="/NewPlayerForm"
          element={
            <NewPlayerForm
              name={name}
              setName={setName}
              status={status}
              setStatus={setStatus}
              breed={breed}
              setBreed={setBreed}
              image={image}
              setImage={setImage}
            />
          }
        />
        <Route
          path="/SinglePlayer"
          element={
            <SinglePlayer
              name={name}
              status={status}
              breed={breed}
              image={image}
            />
          }
        />
      </Routes>
    </>
  );
}
