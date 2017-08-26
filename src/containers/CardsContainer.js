import React from 'react'
import FilmCard from '../components/FilmCard'
import FilmInfo from '../components/FilmInfo'

const CardsContainer = ({films}) => {
  const filmCards = films.map((film, i) =>
    <div className="column" key={i}>
      <div className="ui one column grid">
        <FilmInfo film={film} />
      </div>
    </div>
  )

  return (
    <div className="twelve wide column">
      <div className="ui four column grid">
        {filmCards}
      </div>
    </div>
  )
}

export default CardsContainer
