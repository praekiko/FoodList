import React, { Component } from 'react';
import foodImage from './images/food.jpeg';
import grayHeart from './images/gray-heart.png';
import grayReview from './images/gray-review.png';
import wongnaiLogo from './images/wongnai-badge.png';
import './App.css';

class FoodList extends Component {
  render() {
    const categories = [{id: 1, title: 'ซูชิ'},
                      {id: 2, title: 'อาหารญี่ปุ่น'},
                      {id: 3, title: 'อาหารฟิวชั่น'}];
    return (
      

      <div className="app">
        <div className="container">      

                  
          <FoodInformation  foodImage={foodImage}
                            foodTitle="Isao" 
                            review="295" 
                            cost="฿฿฿" 
                            isUserChoice="true" 
                            category={categories}
                            distance="8500"
                            />  

          
          <span className="footer"></span>
        
        </div>

      </div>
    );
  }
}

class FoodInformation extends Component {

  render() {
    let usersChoice

    if(this.props.isUserChoice){
      usersChoice = `USERS' CHOICE 2017`
    }
    return (
      <div >
        <div className="image">
          <img src={this.props.foodImage} alt="foodImage" />          
        </div>

        <div className="detail">
          <div className="title">
            {this.props.foodTitle}
          </div>

          <div className="reviewCost">
            <img src={grayReview} className="reviewImage" alt="review" />
            <div className="review">
              {this.props.review}    
            </div>
            <div className="cost"> 
              {this.props.cost}฿
            </div>
          </div>

          <button type="button" className="choiceButton">
            <img src={wongnaiLogo} className="logo" alt="logo" />
            <div className="choice">{usersChoice}</div>
          </button>

          <div className="category">
            ประเภท {this._getCategory()}
          </div>            

        </div>

        <img src={grayHeart} className="heart" alt="heart" />
        <div className="distance"> {this._getDistance()} </div>

      </div>  


    );
  }

  _getDistance(){
    if(this.props.distance >= 0 && this.props.distance <= 1000){
      return `${this.props.distance} ม.`
    }
    else {
      let distance = this.props.distance / 1000
      return `${distance} กม.` 
    }
  }

  _getCategory() {    

    return (this.props.category.map((cat) => <a href="#" className="link" key={cat.id}>{cat.title} </a>)
                               .reduce((prev, curr) => [prev, ' , ', curr]));
  }
}

export default FoodList;
