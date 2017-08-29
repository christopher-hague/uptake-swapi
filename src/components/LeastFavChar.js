import React from 'react'

const LeastFavChar = ({name, gender, films, homeworld}) => {

  return (
    <div className="Least-Fav-Char">
      <h1>Least Favorite Character</h1>
      <h3>{name}</h3>
      <ul>
        <li>Gender: {gender}</li>
        <li>Homeworld: {homeworld}</li>
        <li>Films: {films}</li>
      </ul>
    </div>
  )
}

export default LeastFavChar
