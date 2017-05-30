import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
  state={
    pokeName: '',
  }

  constructor(){
    super()
  }

  render() {
    return (
      <div className="pokemon">
        <img src="http://i.imgur.com/o9IhO.gif" alt="pokedex" />
        <form onSubmit={this.handeSubmit}>
          <input type="text" value={this.state.pokeName} onChange={this.handleChange}/>
          <button type="submit">Search for a pokemon!</button>
        </form>  
      </div>  
    )
  }
}
export default Pokemon