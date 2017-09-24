import React, { Component } from 'react';
import foodImage1 from './images/food.jpg';
import foodImage2 from './images/indus-restaurant.jpg';

import FoodDetail from './FoodDetail'

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

      return (<FoodDetail foodImage={image}
                          foodTitle={food.title} 
                          review={food.review} 
                          cost={food.cost} 
                          isUserChoice={food.isUserChoice} 
                          category={this._getCategoryByID(foodCategory)}
                          distance={food.distance}
                          key={food.id}
                          /> );
    });
  }

  /* Filter food categories by its id */
  _getCategoryByID(foodCategory) {
    return (this.state.categories.filter(cat => foodCategory.indexOf(cat.id) !== -1))
  }
}




export default FoodList;
