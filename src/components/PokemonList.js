import React from "react";
import { PokemonCard } from "./PokemonCard";

function PokemonList({ pokemon,  setDetails }) {
  // console.log(pokemon);
  return (
      <div className="pokegrid">
      
      {pokemon.length && pokemon.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.name} setDetails={setDetails}/>
      ))} 
      

    </div>
  );
}

export  {PokemonList};