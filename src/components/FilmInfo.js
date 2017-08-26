import React from 'react'

const FilmInfo = ({film}) => {
  return (
    <div className="ui segment">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTeYpkPPNMufbwBZC-nYS2FCSA_lOJ0uf72u0iYBcQKdISCvhsuOzzXER"></img>
      <ul>
        <li>{film.title}</li>
        <li>{film.director}</li>
      </ul>
    </div>
  )
}

export default FilmInfo
