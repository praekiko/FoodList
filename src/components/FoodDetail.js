import React, { Component } from 'react'
import grayReview from '../images/gray-review.png';


class FoodDetail extends Component {

  render() {
    return (
      <div >
    	
        {/* Food Title */}
        <a href={this.props.url} className="title">
          {this.props.foodTitle}
        </a>
        {/* Review and cost */}
        <div className="review-cost-list">
          <img src={grayReview} className="reviewImage" alt="review" />
          <span className="review">
            {/* Make it in a number with comma */}
            {this.props.review.toLocaleString()}    
          </span>
          <span className="cost"> 
            {/* Get cost range in string */}
            {this._getCostString()}
          </span>
        </div>
      </div>
    );
  }

  _getCostString() {
    let costString = ""
    for(let i = 0; i < this.props.cost; i++){
      costString += "฿"
    }

    return costString
  }
}

export default FoodDetail;