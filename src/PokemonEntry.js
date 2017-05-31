import React, { Component } from 'react'
import './PokemonEntry.css'

class PokemonEntry extends Component {
   state = {
    poke: {},
    moveSet: []
  }
  
  
  constructor(props) {
    super(props)
    this.fetchUserData(props) 
  }

  fetchUserData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokeName}`)
      .then(response => response.json())
      .then(poke => this.setState({ poke }))
      .then(this.createMoveSet.bind(this)) 
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  createMoveSet() {
    const moveset = []
    while (moveset.length !== 4){
      const index = Math.floor(Math.random() * (80))
      if (index <= this.state.poke.moves.length){
        moveset.push(this.state.poke.moves[index].move.name)
      }
    }
    this.setState({ moveSet: moveset })
  }

  render() {
    const { poke } = this.state
    return (
      <div className="pokemon-entry">
        <h2>{poke.name}</h2>
        <h3>Weight: {poke.weight}</h3>
        <h3>Height: {poke.height}</h3>
        <h3>Id: {poke.id}</h3>
        <h3>One possible moveset: {(this.state.moveSet.toString())}</h3>
      </div>
    )
  }
}

export default PokemonEntry