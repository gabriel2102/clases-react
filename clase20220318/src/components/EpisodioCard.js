import React from 'react'

const EpisodioCard = (props) => {
    const {name, date} = props;
  return (
    <div>
        <h1>Titulo: {name}</h1>
        <h3>Fecha: {date}</h3>
    </div>
  )
}

export default EpisodioCard