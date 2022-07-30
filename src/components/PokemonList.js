import React from "react";
import { PokemonCard } from "./PokemonCard";

function PokemonList({ pokemon,  setDetails, searchQuery }) {
  // console.log(pokemon);
  return (
      <div className="pokegrid">
      
      {pokemon.length && pokemon.filter(poke=>poke.name.toLowerCase().includes(searchQuery.toLowerCase())).map((poke) => (
        <PokemonCard pokemon={poke} key={poke.name} setDetails={setDetails}/>
      ))} 
      

    </div>
  );
}

export  {PokemonList};