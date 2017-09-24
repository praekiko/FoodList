import React, { Component } from 'react';
import foodImage1 from '../images/food.jpg';
import foodImage2 from '../images/indus-restaurant.jpg';

import FoodImage from './FoodImage'
import FoodDetail from './FoodDetail'
import UserChoice from './UserChoice'
import FoodCategories from './FoodCategories'
import FavoriteAndDistance from './FavoriteAndDistance'

class FoodList extends Component {
  constructor() {
    super();

    this.state = {
      /* Food categories */
      categories: [ {id: 1, title: 'ซูชิ', link: '#'},
                    {id: 2, title: 'อาหารญี่ปุ่น', link: '#'},
                    {id: 3, title: 'อาหารฟิวชั่น', link: '#'},
                    {id: 4, title: 'อาหารอินเดีย', link: '#'}],

      /* Food object */
      foods: [{ id: 1, 
                image: {foodImage1},
                title: "Isao",
                review: 295,
                cost: "฿฿฿฿",
                isUserChoice: true,
                category: [1, 2, 3],
                distance: 8500},
              { id: 2, 
                image: {foodImage2},
                title: "Indus",
                review: 2950,
                cost: "฿฿฿",
                isUserChoice: false,
                category: [4],
                distance: 850}]
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
      /* food.image return object of its key and value */
      const image = Object.values(food.image);
      const foodCategory = food.category;

      return (  <div>
                <ul className="app">
                <li className="container" >

                  <FoodImage foodImage={image}
                             key={food.id} />
                  <div className="detail">
                    <FoodDetail  foodTitle={food.title} 
                                review={food.review} 
                                cost={food.cost}
                                key={food.title}/>
                    <UserChoice isUserChoice={food.isUserChoice} 
                                key={food.isUserChoice}/>
                    <FoodCategories category={this._getCategoryByID(foodCategory)} 
                                    key={foodCategory[0]}/>
                  </div>
                  <FavoriteAndDistance  distance={food.distance} 
                                        key={food.distance}/>

                  <span className="footer">      
                  </span>
                </li>
                </ul>
                
              </div>
              );
    });
  }

  /* Filter food categories by its id */
  _getCategoryByID(foodCategory) {
    return (this.state.categories.filter(cat => foodCategory.indexOf(cat.id) !== -1))
  }
}




export default FoodList;