import React, {useEffect, useState} from 'react'
import axios from 'axios';

export const PokemonCard = ({pokemon, setDetails}) => {
    const [pokemonDetails, setPokemonDetails] = useState(null)
    const openDetail= () =>{
        setDetails(prev=>({...prev,status:!prev.status, details:{name:pokemon.name, ...pokemonDetails}}))
    }

    // console.log(pokemon);
    useEffect(()=>{
        axios.get(pokemon.url 
          ).then(res => {
            console.log(res);
            setPokemonDetails({pid:res.data.id, height:res.data.height, weight:res.data.weight})
          })
    },[pokemon.url])

  return (
     pokemonDetails !== null && <article className='pokecard'>
        <img load="lazy" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonDetails.pid}.svg`} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
        
        <button onClick={openDetail} >Know More</button>
    </article>
  )
}
