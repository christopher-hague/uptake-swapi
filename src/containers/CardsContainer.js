import React from 'react'
import FilmCard from '../components/FilmCard'

class CardsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      films: this.props.films,
      characters: this.props.characters
    }
  }

  charNamesURLs() {
    return this.state.characters.map(char => ({name: char.name, url: char.url}))
  }

  // gets main characters from film passed
  getMainCharacters(film) {
    var mainCharactersURLs = film.characters.slice(0, 3)
    return this.state.characters.filter(char => mainCharactersURLs.includes(char.url))
  }

  allCardInfo() {
    return this.state.films.map(film => (
      {
        title: film.title,
        director: film.director,
        main_chars:this.getMainCharacters(film),
        episode_id: film.episode_id}
    ))
    .sort( (a,b) => a.episode_id - b.episode_id )
  }

  makePairs() {
    var allCardsInfo = this.allCardInfo()
    var cardPairs = []
    for(let i = 0; i < 7; i += 2) {
      cardPairs.push([allCardsInfo[i], allCardsInfo[i + 1]])
    }
    return cardPairs
  }

  render() {
    // pass a filmcard with information about two movies

    const testFilmCards = this.makePairs().map((pair, i) =>
      <FilmCard key={i + 1} leftCardInfo={pair[0]} rightCardInfo={pair[1]} />
    )
    
    console.log("filmCards: ", testFilmCards)

    return (
      <div className="Cards-Container">
        {testFilmCards}
      </div>
    )
  }
}

export default CardsContainer
