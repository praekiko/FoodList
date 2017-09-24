import React, { Component } from 'react'
import grayHeart from '../images/gray-heart.png';


class FavoriteAndDistance extends Component {

  render() {
    return (
      <div>
        <img src={grayHeart} className="heart" alt="heart" />
        <div className="distance"> {this._getDistance()} </div>
      </div>
    )
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
}

export default FavoriteAndDistance;