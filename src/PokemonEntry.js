import React, { Component } from 'react'
import './PokemonEntry.css'

class PokemonEntry extends Component {
   state = {
    poke: {
    }
  }
  
  
  constructor(props) {
    super(props)
    this.fetchUserData(props) 
  }

  fetchUserData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokeName}`)
      .then(response => response.json())
      .then(poke => this.setState({ poke }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { poke } = this.state
    return (
      <div className="pokemon-entry">
        <h2>{poke.name}</h2>
        <h3>Weight: {poke.weight}</h3>
        <h3>Height: {poke.height}</h3>
        <h3>Id: {poke.id}</h3>
      </div>
    )
  }
}

export default PokemonEntry