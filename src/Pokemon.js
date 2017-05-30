import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PokemonEntry from './PokemonEntry'
import './Pokemon.css'

class Pokemon extends Component {
  state= {
    pokeName: '',
  }

  handleChange(ev) {
    const pokeName = ev.currentTarget.value
    this.setState( {pokeName} )
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokeName}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img className="left" src="http://i.imgur.com/pQckBQD.png" alt="pokeball" />
        <img src="http://i.imgur.com/o9IhO.gif" alt="pokedex" />
        <img className="right" src="http://i.imgur.com/pQckBQD.png" alt="pokeball" />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.pokeName} onChange={this.handleChange.bind(this)}/>
          <button type="submit">Search for a pokemon!</button>
        </form>  
        <Route exact path='/pokemon' render={() => (
          <h3>Please enter a pokemon to search for</h3> 
        )} />
        <Route path='/pokemon/:pokeName' component={PokemonEntry} />
      </div>  
    )
  }
}
export default Pokemon