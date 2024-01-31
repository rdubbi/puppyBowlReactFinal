import React from "react";
import { useState } from "react";

export default function NewPlayerForm({
  name,
  setName,
  status,
  setStatus,
  breed,
  setBreed,
  image,
  setImage,
}) {
  const [success, setSuccess] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
            // status: status,
            imageUrl: image,
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      setSuccess(
        `${name} Submitted Successfully! go see your pup in all its glory by clicking 'All Players' in the Navigation Bar above.`
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Add Your Pup</h2>
      <h4>{success}</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Pup Name:
          <input
            type={"text"}
            placeholder="Lil Mr. Muffins"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type={"text"}
            placeholder="Corder Bollie"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </label>
        <label>
          Status:
          <input
            type={"text"}
            placeholder="Enter 'bench' or 'field'"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </label>
        <label>
          Pup Image:{" "}
          <input
            type={"text"}
            placeholder="www.yourDog.com"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
