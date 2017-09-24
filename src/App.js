import React, { Component } from 'react'
import './App.css';
import FoodList from './FoodList'
import FoodDetail from './FoodDetail'

class App extends Component {

  render() {
    return (
      <div>        
        <FoodList />
      </div>
    )
  }
}

export default App;