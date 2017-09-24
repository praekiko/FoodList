import React, { Component } from 'react';

import FoodImage from './FoodImage'
import FoodDetail from './FoodDetail'
import UserChoice from './UserChoice'
import FoodCategories from './FoodCategories'
import FavoriteAndDistance from './FavoriteAndDistance'

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
    fetch('http://demo3772382.mockable.io/frontend-interview?apiToken=wongnai')
    .then((result) => result.json())
    .then((data) => {
      let foods = data.page.entities
      this.setState({foods: foods})
    })
    .catch((e) => console.log(e));

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
      if(food.mainPhoto){
        image = food.mainPhoto.thumbnailUrl
      }
      else {
        image = food.defaultPhoto.thumbnailUrl
      }
      

      return (  <div>
                <ul className="app">
                <li className="container" >

                  <FoodImage foodImage={image}
                             key={food.name} />
                           
                  <div className="detail">
                    <FoodDetail  foodTitle={food.name}
                                url={food.url} 
                                review={food.statistic.numberOfReviews} 
                                cost={food.priceRange.value}
                                key={food.url}/>
                    <UserChoice key={food.name}/>
                    <FoodCategories category={food.categories} 
                                    key={food.categories}/>
                  </div>
                  <FavoriteAndDistance  currLat={this.state.currentLat}
                                        currLng={this.state.currentLng}
                                        destLat={food.lat}
                                        destLng={food.lng} 
                                        key={food.lat}/>
                  <span className="footer">      
                  </span>
                </li>
                </ul>
                
              </div>
              );
    });
  }

  


}




export default FoodList;