import React, { Component } from 'react'
import grayHeart from './images/gray-heart.png';
import grayReview from './images/gray-review.png';
import wongnaiLogo from './images/wongnai-badge.png';

class FoodDetail extends Component {

  render() {

    /* Check if it is a users' choice or not */
    let userChoiceButton

    if(this.props.isUserChoice){
      /* If so -> show a button */
      userChoiceButton = (<button type="button" className="choiceButton">
                            <img src={wongnaiLogo} className="logo" alt="logo" />
                            <span className="choice">USERS' CHOICE 2017</span>
                          </button>)
    }


    return (
      <div >
        <ul className="app">
          <li className="container">
            {/* Food image on the left hand side */}
            <div className="image">
              <img src={this.props.foodImage} alt="foodImage" />  
            </div>

            {/* Food detail on the right hand side */}
            <div className="detail">
              {/* Food Title */}
              <span className="title">
                {this.props.foodTitle}
              </span>

              {/* Review and cost */}
              <div className="review-cost-list">
                <img src={grayReview} className="reviewImage" alt="review" />
                <span className="review">
                  {/* Make it in a number with comma */}
                  {this.props.review.toLocaleString()}    
                </span>
                <span className="cost"> 
                  {this.props.cost}
                </span>
              </div>

              {/* Show or hide a users' choice button */}
              <div>
                {userChoiceButton}
              </div>

              {/* Food category */}
              <span className="category">
                ประเภท {this._getCategory()}
              </span>            

            </div>

            {/* Favorite heart and distance on the top right */}
            <img src={grayHeart} className="heart" alt="heart" />
            <div className="distance"> {this._getDistance()} </div>
          
            {/* border bottom line */}
            <span className="footer">      
            </span> 
      
          </li>
        </ul>

      </div>  


    );
  }

  /* Get the distance in meter or kilometer */
  _getDistance() {
    if(this.props.distance >= 0 && this.props.distance <= 1000){
      return `${this.props.distance} ม.`
    }
    else {
      let distance = this.props.distance / 1000
      return `${distance.toLocaleString()} กม.` 
    }
  }

  /* Get category in form of link split with comma */
  _getCategory() {    

    return (this.props.category.map((cat) => <a href={cat.link} className="link" key={cat.id}>{cat.title} </a>)
                               .reduce((prev, curr) => [prev, ' , ', curr]));
  }
}

export default FoodDetail;