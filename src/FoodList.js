import React, { Component } from 'react';
import foodImage1 from './images/food.jpg';
import foodImage2 from './images/indus-restaurant.jpg';
import grayHeart from './images/gray-heart.png';
import grayReview from './images/gray-review.png';
import wongnaiLogo from './images/wongnai-badge.png';
import './App.css';

class FoodList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [{id: 1, title: 'ซูชิ', link: '#'},
                    {id: 2, title: 'อาหารญี่ปุ่น', link: '#'},
                    {id: 3, title: 'อาหารฟิวชั่น', link: '#'},
                    {id: 4, title: 'อาหารอินเดีย', link: '#'}],

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

  _getFoodList() {
    return this.state.foods.map( (food) => {
      const image = Object.values(food.image);
      const foodCategory = food.category;

      return (<FoodInformation  foodImage={image}
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

  _getCategoryByID(foodCategory) {
    return (this.state.categories.filter(cat => foodCategory.indexOf(cat.id) !== -1))
  }
}


class FoodInformation extends Component {

  render() {

    let userChoiceButton

    if(this.props.isUserChoice){
      userChoiceButton = (<button type="button" className="choiceButton">
                            <img src={wongnaiLogo} className="logo" alt="logo" />
                            <span className="choice">USERS'' CHOICE 2017</span>
                          </button>)
    }


    return (
      <div >
        <ul className="app ">
          <li className="container">
            <div className="image">
              <img src={this.props.foodImage} alt="foodImage" />  
            </div>

            <div className="detail">
              <span className="title">
                {this.props.foodTitle}
              </span>

              <div className="review-cost-list">
                <img src={grayReview} className="reviewImage" alt="review" />
                <span className="review">
                  {this.props.review.toLocaleString()}    
                </span>
                <span className="cost"> 
                  {this.props.cost}
                </span>
              </div>

              <div>
                {userChoiceButton}
              </div>

              <span className="category">
                ประเภท {this._getCategory()}
              </span>            

            </div>

            <img src={grayHeart} className="heart" alt="heart" />
            <div className="distance"> {this._getDistance()} </div>
          
            <span className="footer">      
            </span> 
      
          </li>
        </ul>

      </div>  


    );
  }


  _getDistance() {
    if(this.props.distance >= 0 && this.props.distance <= 1000){
      return `${this.props.distance} ม.`
    }
    else {
      let distance = this.props.distance / 1000
      return `${distance.toLocaleString()} กม.` 
    }
  }

  _getCategory() {    

    return (this.props.category.map((cat) => <a href={cat.link} className="link" key={cat.id}>{cat.title} </a>)
                               .reduce((prev, curr) => [prev, ' , ', curr]));
  }
}

export default FoodList;
