import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FoodList extends Component {
  render() {
    return (
      

      <div className="app">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
        
        </div>
        <div>
        
          <FoodInformation  foodTitle="Isao" 
                            review="295" 
                            cost="฿฿฿" 
                            isUserChoice="true" 
                            category={['ซูชิ', 'อาหารญี่ปุ่น', 'อาหารฟิวชั่น']}
                            distance="8500"/>  
        </div>
        
      </div>
    );
  }
}

class FoodInformation extends Component {

  render() {
    let usersChoice

    if(this.props.isUserChoice){
      usersChoice = <p> Choice !</p>
    }
    return (
      <div>
      {this.props.foodTitle}
      {this.props.review}
      {this.props.cost}฿
      {usersChoice}
      ประเภท: {this._getCategory()}
      {this._getDistance()}
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

    return (this.props.category.join(', '));
  }
}

export default FoodList;
