import React, { Component } from 'react';
import './App.css';
import MiscContainer from "./containers/MiscContainer"
import CardsContainer from "./containers/CardsContainer"

class App extends Component {
  constructor() {
    super()

    this.state = {
      favChar: null,
      leastFavChar: null,
      films: null,
      planets: null,
      characters: null
    }
  }

  fetchPlanets() {
    return fetch("https://swapi.co/api/planets/")
    .then( res => res.json() )
    .then( json => {
      this.setState({
        planets: json
      })
    })
  }

  fetchPalpatine() {
    return fetch("https://swapi.co/api/people/?page=2")
    .then( res => res.json() )
    .then( json => {
      this.setState({
        favChar: json.results[9]
      })
    })
  }

  fetchJarJar() {
    return fetch("https://swapi.co/api/people/?page=4")
    .then( res => res.json() )
    .then( json => {
      this.setState({
        leastFavChar: json.results[3]
      })
    })
  }

  fetchAllFilms() {
    return fetch("https://swapi.co/api/films/")
    .then( res => res.json() )
    .then ( json => {
      this.setState({
        films: json.results.map(film => (
          film
        ))
      })
    })
  }

  fetchCharacters() {
    return fetch("https://swapi.co/api/people/")
    .then( res => res.json() )
    .then ( json => {
      this.setState({
        characters: json.results.map(character => (
          character
        ))
      })
    })
  }

  componentDidMount() {
    this.fetchPalpatine()
    this.fetchJarJar()
    this.fetchAllFilms()
    this.fetchPlanets()
    this.fetchCharacters()
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {

    if(!this.state.favChar || !this.state.leastFavChar || !this.state.films || !this.state.planets || !this.state.characters) {
      return null
    } else {

      return (
        <div>
          <MiscContainer
            favChar={this.state.favChar}
            leastFavChar={this.state.leastFavChar}
            films={this.state.films}
            planets={this.state.planets}
          />
          <CardsContainer films={this.state.films} characters={this.state.characters}/>
        </div>
      );
    }
  }
}

export default App;
