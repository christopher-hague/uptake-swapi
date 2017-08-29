import React from 'react'

const FavChar = ({name, gender, films, homeworld}) => {

  return (
    <div className="Fav-Char">
      <h1>Favorite Character</h1>
      <h3>{name}</h3>
      <ul>
        <li>Gender: {gender}</li>
        <li>Homeworld: {homeworld}</li>
        <li>Films: {films}</li>
      </ul>
    </div>
  )
}

export default FavChar
