import React from 'react'

const PersonajeCard = (props) => {
    const {name, src, origin, location, specie} = props;
  return (
    <div className='card'>
        <h2>{name}</h2>
        <img src={src}></img>
        <h5>Especie: {specie}</h5>
        <h5>Origen: {origin}</h5>
        <h5>Localizado: {location}</h5>
    </div>
  )
}

export default PersonajeCard