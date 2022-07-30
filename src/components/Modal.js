import React from 'react'

const Modal = ({toggleModal, details}) => {
    // console.log(details);
  return (
    <div className='modal'>
        <article><img load="lazy" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${details.pid}.svg`} alt={details.name} />
        <h1>{details.name}</h1>
        <p>Weight={details.weight}</p>
        <p>Height={details.height}</p>
        

        <button onClick={toggleModal}>Close</button>




        </article>
        
    </div>
  )
}

export  {Modal};