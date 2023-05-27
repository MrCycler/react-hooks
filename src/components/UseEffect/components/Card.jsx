import React from 'react'

export default function Card({character}) {
  return (
    <div>
        <img src={character.image} alt={character.name} />
        <h4>{character.name}</h4>
    </div>
  )
}
