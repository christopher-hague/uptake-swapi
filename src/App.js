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
      planets: null
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

  componentDidMount() {
    this.fetchPalpatine()
    this.fetchJarJar()
    this.fetchAllFilms()
    this.fetchPlanets()
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  getCharHomeworld(char) {
    return
  }

  render() {
    console.log(this.state)

    if(!this.state.favChar || !this.state.leastFavChar || !this.state.films || !this.state.planets) {
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
          <CardsContainer />
        </div>
      );
    }
  }
}

export default App;

// <div className="ui grid container">
//   <div className="four wide column">
//     <MiscContainer
//       favChar={this.state.favChar}
//       leastFavChar={this.state.leastFavChar}
//     />
//     <div>misc other stuff</div>
//   </div>
//
//   <div className="twelve wide column">
//     <CardsContainer films={this.state.films} />
//   </div>
// </div>
