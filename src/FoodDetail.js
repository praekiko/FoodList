import React, { Component } from 'react'
import grayReview from './images/gray-review.png';


class FoodDetail extends Component {

  render() {
    return (
      <div >
    	
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
      </div>
    );
  }
}

export default FoodDetail;