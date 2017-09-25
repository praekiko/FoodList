import React, { Component } from 'react';

import FoodImage from './FoodImage'
import FoodDetail from './FoodDetail'
import FoodCategories from './FoodCategories'
import FavoriteAndDistance from './FavoriteAndDistance'

import wongnaiLogo from '../images/wongnai-badge.png';


class FoodList extends Component {
  constructor() {
    super();

    this.state = {
      foods: [],
      currentLat: 0,
      currentLng: 0
    }
    
  }


  componentDidMount() {
    // Fecth json data from API
    fetch('http://demo3772382.mockable.io/frontend-interview?apiToken=wongnai')
    .then((result) => result.json())
    .then((data) => {
      let foods = data.page.entities
      this.setState({foods: foods})
    })
    .catch((e) => console.log(e));

    // Get current Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({currentLat: position.coords.latitude})
        this.setState({currentLng: position.coords.longitude}) 
      });
    } 
    else { 
      console.log("Geolocation is not supported by this browser.");
    }     

  }

  render() {
    const foods = this._getFoodList()

    return (      
      <div>    
        {foods}
      </div>
    );
  }

  /* Map foods object to show in FoodDetail component */
  _getFoodList() {
    return this.state.foods.map( (food) => {
      
      let image
      let imageKey
      if(food.mainPhoto){
        image = food.mainPhoto.thumbnailUrl
        imageKey = food.mainPhoto.photoId
      }
      else {
        image = food.defaultPhoto.thumbnailUrl
        imageKey = food.defaultPhoto.photoId
      }

      return (  <div key={imageKey}>
                  <ul className="app">
                    <li className="container" >

                      <FoodImage foodImage={image} />
                               
                      <div className="detail">
                        <FoodDetail  foodTitle={food.name}
                                    url={food.url} 
                                    review={food.statistic.numberOfReviews} 
                                    cost={food.priceRange.value} />
                        {this._getUserChoiceButton()}
                        <FoodCategories category={food.categories} />
                      </div>
                      
                      <FavoriteAndDistance  currLat={this.state.currentLat}
                                            currLng={this.state.currentLng}
                                            destLat={food.lat}
                                            destLng={food.lng} />

                      <span className="footer">      
                      </span>

                    </li>
                  </ul>
                
                </div>
              );
    });
  }

  _getUserChoiceButton() {
    return (<button type="button" className="choiceButton">
              <img src={wongnaiLogo} className="logo" alt="logo" />
              <span className="choice">USERS' CHOICE 2017</span>
              </button>)
  }  


}

export default FoodList;