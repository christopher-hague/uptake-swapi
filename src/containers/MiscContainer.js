import React from 'react'
import FavChar from '../components/FavChar'
import LeastFavChar from '../components/LeastFavChar'
import CrawlStats from '../components/CrawlStats'

class MiscContainer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      favChar: props.favChar,
      leastFavChar: props.leastFavChar,
      films: props.films,
      planets: props.planets
    }
  }

  getCharFilms(char) {
    return this.state.films.filter(film => char.films.includes(film.url))
    .map(film => film.title).join(", ")
  }

  getCharHomeworld(char) {
    return this.state.planets.results.find(planet => this.state.favChar.homeworld === planet.url)
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {
    const favChar = this.state.favChar
    const leastFavChar = this.state.leastFavChar

    return (
      <div className="Misc-Container">
        <div className="Character-Container">
          <FavChar
            name={favChar.name}
            gender={this.capitalize(favChar.gender)}
            films={this.getCharFilms(favChar)}
            homeworld={this.getCharHomeworld(favChar).name}
          />
          <LeastFavChar
            name={leastFavChar.name}
            gender={this.capitalize(leastFavChar.gender)}
            films={this.getCharFilms(leastFavChar)}
            homeworld={this.getCharHomeworld(LeastFavChar).name}
          />
        </div>

        <div className="Chart-Container">
          <CrawlStats films={this.state.films}/>
        </div>
      </div>
    )
  }
}

export default MiscContainer
