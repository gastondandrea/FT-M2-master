import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return (
    <div>
      <h2>Species</h2>
      {species.map((specie, index)=>(
        <button key={index} onClick={handleSpecies} value={specie}>
          {specie}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}
